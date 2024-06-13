import React, { useEffect, useRef, useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import axios from 'axios';

interface Props {
  isPropsMount: boolean;
  threshold?: number; // 대상 요소가 root 에 지정된 요소 내 얼마나 들어올지 비율로 확인 => 0 ~ 1.0 으로 넣어야한다.
  // threshold: 1.0 은 대상 요소가 root 에 지정된 요소 내에서 100% 보여질 때 콜백이 호출될 것을 의미합니다
  rootMargin?: string; // 스크롤 대상 마진
  root?: Element | null; // 스크롤 대상 타겟
  target?: Element | null; // 타겟
  onIntersect: IntersectionObserverCallback; // 감지됐을때 콜백 이벤트
}

export const useIntersectionObserver = ({ root, target, onIntersect, threshold = 1.0, rootMargin = '0px' }: Props) => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  useEffect(() => {
    if (!root || !target || threshold > 1) return;

    const observer: IntersectionObserver = new IntersectionObserver(onIntersect, {
      root,
      rootMargin,
      threshold,
    });

    observer.observe(target);

    // eslint-disable-next-line consistent-return
    return () => {
      observer.unobserve(target);
    };
  }, [target, root, rootMargin, onIntersect, threshold, mount]);
};

const useGetPerson = (limit: number) => {
  return useInfiniteQuery(
    ['infinitePerson'],
    async ({ pageParam = 1 }) => {
      const res = await axios
        .get('board-api/v1/board', {
          params: { offset: limit * (pageParam - 1), limit },
        })
        .then((res) => res.data);

      return { data: res, currentPage: pageParam };
    },
    {
      getNextPageParam: (lastPage) => {
        return lastPage.currentPage + 1; // 다음 페이지를 호출할 때 사용 될 pageParam
      },
      refetchOnWindowFocus: false,
    }
  );
};

const Ele: React.FC<{ data: any; personQuery: any }> = ({ data, personQuery }) => {
  const root = useRef<HTMLDivElement>(null);
  const target = useRef<HTMLDivElement>(null);

  useIntersectionObserver({
    isPropsMount: !!data.length,
    root: root.current,
    target: target.current,
    onIntersect: ([{ isIntersecting }]) => {
      if (!personQuery.isFetching && isIntersecting && data[0].rnum !== data.length - 1) personQuery.fetchNextPage();
    },
  });

  return (
    <div className="table-kws">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: 500,
          overflowY: 'auto',
          width: 600,
          background: '#f1f1f1',
        }}
        ref={root}
      >
        {data.map((item: any, i: number) => {
          const isLastItem = data.length - 1 === i;

          return (
            <div key={item.title + i} style={{ fontSize: 30 }} ref={isLastItem ? target : undefined}>
              {item.title}
            </div>
          );
        })}
      </div>
      {/* 클릭 시 다음 페이지 호출 */}
      <button type="button" onClick={() => personQuery.fetchNextPage()}>
        LOADMORE
      </button>
    </div>
  );
};

export const TableTest2: React.FC = () => {
  const [limit, set_limit] = useState(50);
  const personQuery = useGetPerson(limit);

  const data = (() => {
    let currentData: any = [];

    personQuery.data?.pages.forEach((page) => {
      // page의 데이터를 합쳐야 되는 귀찮음이 생기더라고
      currentData = [...currentData, ...page.data];
    });
    return currentData;
  })();

  // 로딩 중일 경우
  if (personQuery.isLoading) {
    return <>Loading...</>;
  }

  // 결과값이 전달되었을 경우
  if (data && data.length) {
    return <Ele data={data} personQuery={personQuery} />;
  }

  return <></>;
};
