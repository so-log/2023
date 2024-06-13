 import React from 'react'
import { useRecoilState } from 'recoil';
import { useBoardListQuery } from '../../queries/useBoardListQuery';
import { filterRecoilState } from '../../state';

 interface Props {
   data?: number;
}

 export const BoardList: React.FC<Props> = (): JSX.Element  => {
    const [filter, setFilter] = useRecoilState(filterRecoilState);


    const { pagination, sort, search, type, user_info, dateFilter, keyword_type, keyword } = filter;


     // 필터 검색어 타입 keywordType 지정
  const keywordType = () => {
    const { title, contents } = keyword_type as { title: number; contents: number };
    if (title === 1 && contents === 0) return 1; // 제목
    if (title === 0 && contents === 1) return 2; // 본문
    if (title === 1 && contents === 1) return 3; // 제목 + 본문
    return 0;
  };
    const { data, isFetching, isLoading } = useBoardListQuery({
        ...pagination,
        sort,
        search,
        type,
        user_info,
        dateFilter,
        keyword_type: keywordType(),
        keyword,
      });
   return (

   <></>

   )}