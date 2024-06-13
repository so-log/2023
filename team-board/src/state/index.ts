import { M_Board } from '../models/boardList';
import { atom } from 'recoil';

export const initialState: M_Board.I_filter = {
  pagination: { offset: 0, limit: 20 },
  sort: { orderKey: 'regEpoch', order: 'descend' },
  search: '',
  type: 0,
  user_info: '',
  dateFilter: { start: 0, end: 0 },
  keyword_type: { title: 0, contents: 0 },
  keyword: '',
  config: 'wholePeriod',
};

export const filterRecoilState = atom<M_Board.I_filter>({
  key: 'filter',
  default: initialState,
});
