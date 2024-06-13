import React from "react";
import "./TodoList.css";

interface I_TodoListProps {
  todos: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

// React.FC 지정해서 평범한 fc이 아니라 컴포넌트라는 것을 지정
export const TodoList: React.FC<I_TodoListProps> = ({
  todos,
  onDeleteTodo,
}): JSX.Element => {
  return (
    <div className="App">
      {todos.map((item) => (
        <li key={item.id}>
          <span>{item.text}</span>
          <button onClick={onDeleteTodo.bind(null, item.id)}>DELETE</button>
        </li>
      ))}
    </div>
  );
};
