import React, { useState } from 'react';
import './App.css';
import TodoForm from './component/todoForm';
import TodoList from './component/todoList';

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "hoàng deeptry"
    },
    {
      id: 2,
      title: "hoàng handsome"
    }
  ])

  function handleTodoClick(todo) {

    const index = todoList.findIndex(x => x.id === todo.id)
    console.log(index)
    if (index < 0)
      return;

    const newtodoList = [...todoList]

    newtodoList.splice(index, 1)
    setTodoList(newtodoList)

  }

  function handleTodoFormSubmit(formValue) {
    console.log(" form submit", formValue)
    const newTodoListSubmit = [...todoList]

    newTodoListSubmit.push({ id: newTodoListSubmit.length + 1, title: formValue.title })
    setTodoList(newTodoListSubmit)

  }
  return (
    <div className="App">
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todolist={todoList} addTodoList={handleTodoClick} />
    </div>
  );
}

export default App;
