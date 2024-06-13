import { atom, atomFamily, selectorFamily } from "recoil";
import { filteredTodoListState } from "../TodoList/atom";
import { v4 as uuidv4 } from "uuid";

export const todoStatisticsModalOpenState = atom<boolean>({
  key: `todoStatisticsModalOpenState/${uuidv4()}`,
  default: false,
});

export const todoStatisticsState = atomFamily<
  { total: number; done: number },
  Date
>({
  key: "todoStatisticsState",
  default: selectorFamily({
    key: "todoStatisticsState/default",
    get:
      (selectedDate) =>
      ({ get }) => {
        const todoList = get(filteredTodoListState(selectedDate));

        return {
          total: todoList.length,
          done: todoList.filter((todo) => todo.done).length || 0,
        };
      },
  }),
});
