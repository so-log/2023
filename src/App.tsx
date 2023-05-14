import React, { useState } from "react";
import { NewTodo } from "./components/NewTodo";
import { TodoList } from "./components/TodoList";
import { I_Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<I_Todo[]>([]);

  const todoAddHandler = (text: string) => {
    // 업데이트가 시행될때, todos 값이 가장 최신상태가 아닐수도 있음
    // setTodos([...todos, { id: Math.random().toString(), text }]);

    // 이전 할일을 fc으로 불러와서 가장 최신 상태임을 보장
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList todos={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
