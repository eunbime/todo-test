import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleContents = (e) => {
    setContents(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      contents,
      isDone: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTitle("");
    setContents("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id) => {
    const isDoneTodos = todos.filter((todo) => {
      if (id === todo.id) {
        if (todo.isDone === false) {
          return { ...todo, isDone: true };
        } else if (todo.isDone === true) {
          return { ...todo, isDone: false };
        }
      } else {
        return todo;
      }

      setTodos(isDoneTodos);
    });
  };

  return (
    <div>
      <TodoForm
        title={title}
        contents={contents}
        handleSubmit={handleSubmit}
        handleTitle={handleTitle}
        handleContents={handleContents}
      />
      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleDone={handleDone}
      />
    </div>
  );
}

export default App;
