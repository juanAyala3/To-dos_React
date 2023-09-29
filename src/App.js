import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';

import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';


const defaultTodos=[
  {text: 'Cortar cebolla',  completed: false},
  {text: 'Tomar el curso de introduccion a  React.js',  completed: false},
  {text: 'Hacer  tarea ',  completed: false},
  {text: 'hacer XD',  completed: true},
  {text: 'hacer XD2',  completed: false},
  {text: 'futbol',  completed: true},
];

function App() {
  const [todos, setTodos]=React.useState(defaultTodos); 
  const [searchValue , setSearchValue]=React.
  useState(''); 

  const completedTodos= todos.filter(todo => todo.completed).length; 
  const totalTodos=  todos.length; 


const  searchedTodos= todos.filter(
  (todo) => {

    return todo.text.toLowerCase().includes(searchValue.toLowerCase()); 

  }

);
  const completeTodo= (text)=>{
    const newTodos= [...todos]; //... crea una copia de todos
    const todoIndex= newTodos.findIndex(
      (todo) => todo.text == text
    )
    newTodos[todoIndex].completed=true; 
    setTodos(newTodos); 
  }

  const deleteTodo= (text)=>{
    const newTodos= [...todos]; //... crea una copia de todos
    const todoIndex= newTodos.findIndex(
      (todo) => todo.text == text
    )
    newTodos.splice(todoIndex, 1); 
    setTodos(newTodos); 
  }

  return (
    
    <>

    <TodoCounter completed={completedTodos} total={totalTodos}/>
    <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
     />

    <TodoList>
      {searchedTodos.map(todo => (
        <TodoItem 
        key={todo.text} 
        text={todo.text}
        completed={todo.completed}
        onComplete={() => completeTodo(todo.text)}
        onDelete={() => deleteTodo(todo.text)}
        />
      ))}
    </TodoList>

   <CreateTodoButton />

    </>
  );
}



export default App;
