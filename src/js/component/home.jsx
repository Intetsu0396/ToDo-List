import React, { useState } from "react";

//create your first component
const Home = () => {
  const [inputvalue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="container">
      <h1>My ToDoList</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputvalue}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                setTodos(todos.concat([inputvalue]));
                setInputValue("");
              }
            }}
            placeholder="What do you need to do?"
          />
        </li>
        {todos.map((item, index) => (
          <li>
            {item}{" "}
            <i
              className="fa-solid fa-trash"
              onClick={() =>
                setTodos(
                  todos.filter((t, currentIndex) => index != currentIndex)
                )
              }
            ></i>{" "}
          </li>
        ))}
      </ul>
      <div>task counter: {todos.length}</div>
    </div>
  );
};

export default Home;
