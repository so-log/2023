import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
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

export const useIntersectionObserver = ({
  root,
  target,
  onIntersect,
  threshold = 1.0,
  rootMargin = '0px',
  isPropsMount,
}: Props) => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  useEffect(() => {
    if (!root || !target || threshold > 1) return;

    // IntersectionObserver 생성
    const observer: IntersectionObserver = new IntersectionObserver(onIntersect, {
      root,
      rootMargin,
      threshold,
    });

    // observe - target 관찰 시작
    observer.observe(target);

    // eslint-disable-next-line consistent-return
    return () => {
      // observe - target 관찰 중지
      observer.unobserve(target);
    };
  }, [target, root, rootMargin, onIntersect, threshold, mount, isPropsMount]);
};

// useQuery
const useGetPerson = (offset: number, limit: number, onSuccess: any) => {
  return useQuery(
    ['infinitePerson', offset, limit],
    () => {
      return axios.get('board-api/v1/board', { params: { offset, limit } }).then((res) => res.data);
    },
    {
      // 윈도우 포커스 됐을때 다시 호출 하는 기능
      refetchOnWindowFocus: false,
      onSuccess,
    }
  );
};

export const TableTest: React.FC = () => {
  const root = useRef<HTMLDivElement>(null);
  const target = useRef<HTMLDivElement>(null);

  const [offset, set_offset] = useState(0);
  const [limit, set_limit] = useState(50);
  const [data, set_data] = useState<any[]>([]);
  const [isPropsMount, set_isPropsMount] = useState(false);
  const personQuery = useGetPerson(offset, limit, (data: any) => {
    set_data((prev) => [...prev, ...data]);
  });

  useEffect(() => {
    // 쿼리가 fetch 된 후 mount 됐을 때
    if (personQuery.isFetchedAfterMount) {
      set_isPropsMount(true);
    }
  }, [personQuery.isFetchedAfterMount]);

  useIntersectionObserver({
    isPropsMount,
    root: root.current,
    target: target.current,
    onIntersect: ([{ isIntersecting }]) => {
      // isIntersecting - root와 target이 교차됐을때 : 바닥에 닿았을 때
      if (!personQuery.isFetching && isIntersecting && personQuery.data[0].rnum !== personQuery.data.length - 1) {
        // offset = 이전 + limit > 다음 data 호출
        set_offset((prev) => prev + limit);
      }
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
      <button
        type="button"
        onClick={() => {
          set_offset((prev) => prev + limit);
        }}
      >
        LOADMORE
      </button>
    </div>
  );
};
