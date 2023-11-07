import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, handleDelete, handleDone }) {
  return (
    <>
      <div>
        {todos
          .filter((todo) => {
            if (todo.isDone === false) return todo;
          })

          .map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                handleDelete={handleDelete}
                handleDone={handleDone}
              />
            );
          })}
      </div>
      <div>
        {todos
          .filter((todo) => {
            if (todo.isDone === true) return todo;
          })
          .map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                handleDelete={handleDelete}
                handleDone={handleDone}
              />
            );
          })}
      </div>
    </>
  );
}

export default TodoList;
