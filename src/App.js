import React, { useState } from 'react';


import NewToDo from './components/NewTodo';
import ToDoList from './components/ToDoList';
const App = () => {
  const onNewToDo = (value) => {
    setTodos([
      ...todos,
      {
        id: new Date().getTime(),
        title: value,
        checked: false
      },
    ]);
  }

  
  const [todos, setTodos] = useState([])
 

 
  const onToggle = (todo) => {
    setTodos(
      todos.map((obj) =>
         obj.id === todo.id ? {...obj,checked:!todo.checked
     }:obj));

    console.log('toggle',todo);
   
  }
  const onRemove = (todo) => {
    setTodos(todos.filter((obj) => obj.id !== todo.id))
  }
  return (

    <section id='app' className='container'>
      <header>
        <h1 className='title'>Faça Tarefas</h1>
      </header>
      <section className='main'>
       <NewToDo onNewToDo={onNewToDo}/>
       <ToDoList todos={todos} onToggle={onToggle} onRemove={onRemove}/>
        
      </section>

    </section>


  )
}
export default App;
