import React from "react";

function TodoItem({ todo, handleDelete }) {
  return (
    <div>
      <div>
        <h3>{todo.title}</h3>
        <p>{todo.contents}</p>
      </div>
      <button onClick={() => handleDelete(todo.id)}>삭제</button>
      <button>완료</button>
    </div>
  );
}

export default TodoItem;
