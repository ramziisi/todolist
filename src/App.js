import React, { useState } from "react";
import ToDoList from "./ToDoList";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [update, setUpdate] = useState(null);
  const [todos, setTodos] = useState([
    {
      todo: "todo1",
      complete: false,
      id: uuidv4(),
    },
    {
      todo: "todo2",
      complete: false,
      id: uuidv4(),
    },
    {
      todo: "todo3",
      complete: false,
      id: uuidv4(),
    },
  ]);
  const [text, setText] = useState(update ? update.todo : "");
  const handleChange = (e) => {
    update
      ? setUpdate({ ...update, todo: e.target.value })
      : setText(e.target.value);
  };
  const addTodo = () => {
    if (update) {
      setTodos(todos.map((el) => (el.id === update.id ? update : el)));
      setUpdate(null);
      setText("");
    } else {
      setTodos([...todos, { todo: text, complete: false, id: uuidv4() }]);
      setText("");
    }
  };
  const deleteTodo = (x) => {
    var newTodos = todos.filter((el) => el !== x);
    setTodos(newTodos);
  };
  return (
    <div className="App">
      <input
        type="text"
        onChange={handleChange}
        value={update ? update.todo : text}
      />
      <button onClick={addTodo}>{update ? "update" : "add"}</button>
      <ToDoList
        todos={todos}
        deleteTodo={deleteTodo}
        setTodos={setTodos}
        setUpdate={setUpdate}
      />
    </div>
  );
}

export default App;
