import React from "react";

function TodoItem({ todo, handleDelete, handleDone }) {
  console.log(todo);
  return (
    <div>
      <div>
        <h3>{todo.title}</h3>
        <p>{todo.contents}</p>
      </div>
      <button onClick={() => handleDelete(todo.id)}>삭제</button>
      <button onClick={() => handleDone(todo.id)}>
        {todo.isDone ? "취소" : "완료"}
      </button>
    </div>
  );
}

export default TodoItem;
