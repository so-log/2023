import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";

export const todoFormModalOpenState = atom<boolean>({
  // 할 일 등록 모달
  key: `todoFormModalOpenState/${uuidv4()}`,
  default: false,
});
