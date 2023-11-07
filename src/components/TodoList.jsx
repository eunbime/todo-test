import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, handleDelete }) {
  return (
    <div>
      {todos.map((todo) => {
        <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete} />;
      })}
    </div>
  );
}

export default TodoList;
