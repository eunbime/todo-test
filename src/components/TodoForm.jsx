import React from "react";

function TodoForm({
  title,
  contents,
  handleSubmit,
  handleTitle,
  handleContents,
}) {
  return (
    <form>
      <div>
        <h2>제목</h2>
        <input type="text" value={title} onChange={(e) => handleTitle(e)} />
      </div>
      <div>
        <h2>내용</h2>
        <input
          type="text"
          value={contents}
          onChange={(e) => handleContents(e)}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        추가하기
      </button>
    </form>
  );
}

export default TodoForm;
