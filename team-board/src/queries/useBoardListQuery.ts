/**
 * 1. 컴포넌트 : client\src\queries\useBoardListQuery.ts
 * 2. 작성일 : 2023.06.13 / 17시 52분 29초
 * 3. 작성자 : 안소희
 * 4. 설명 : 게시판 목록 query
 */

 import { Any, api } from '../common/fuctions/api'
 import { M_Board } from '../models/boardList';
 import { useQuery } from 'react-query';
 
 const orderType = (prevType: string) => {
   if (prevType === 'descend') return 'desc';
   return 'asc';
 };
 
 type Filter = {
   offset: number;
   limit: number;
   sort: { orderKey: string; order: string };
   search?: string; // input- search
   type: number; // 검색 탭
   user_info?: string; // filter - 작성자
   dateFilter: { start: number; end: number }; // filter - 기간
   keyword_type?: number; // filter - 검색어 타입
   keyword: string; // filter - 검색어
 };
 
 export const useBoardListQuery = (filter: Filter) => {
   const newFilter: Any = {
     offset: filter.offset,
     limit: filter.limit,
     orderKey: 'regEpoch',
     orderType: 'desc',
     type: 0,
     start: 0,
     end: 0,
     keyword_type: 0,
   };
 
   if (filter.search) newFilter['search'] = filter.search;
   if (filter.sort.orderKey) newFilter['orderKey'] = filter.sort.orderKey;
   if (filter.sort.order) newFilter['orderType'] = orderType(filter.sort.order);
   if (filter.type) newFilter['type'] = filter.type;
   if (filter.user_info) newFilter['user_info'] = filter.user_info;
   if (filter.dateFilter.start) newFilter['start'] = filter.dateFilter.start;
   if (filter.dateFilter.end) newFilter['end'] = filter.dateFilter.end;
   if (filter.keyword_type) newFilter['keyword_type'] = filter.keyword_type;
   if (filter.keyword) newFilter['keyword'] = filter.keyword;
 
   const fetch = (): Promise<M_Board.I_BoardList[]> => api.get('board', { params: newFilter }).then((res) => res.data);
 
   return useQuery(['boardList', filter], { queryFn: fetch });
 };
 