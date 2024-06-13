import React, { useRef } from "react";
import "./NewTodo.css";

type T_NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

export const NewTodo: React.FC<T_NewTodoProps> = ({
  onAddTodo,
}): JSX.Element => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // 밑에 코드가 먼저 실행 됨 > 이후에 submit >> null일 수 없음
    // if(textInputRef.current) 가드
    // ! 로 null이 아님을 알려줌
    const enteredText = textInputRef.current!.value;
    onAddTodo(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};
