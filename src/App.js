import "./App.css";
import React, { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  // Add a todo 
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  // Set todo to complete
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todos.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // Remove a todo
  const removeTodo = (id) => {
    const remove = [...todos].filter((todo) => todo.id !== id);

    setTodos(remove);
  };

  // Edit a todo
  const editTodo = (id, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) => prev.map((item) => (item.id === id ? newValue : item)));
  };

  return (
    <div className="todo-app">
      <h1>My Todos</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;
