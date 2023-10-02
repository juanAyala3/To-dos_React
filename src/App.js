import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';

import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';


/*

Hay que copiar y pegar este codigo comentado para empezar  a mostrar los TODOS

const defaultTodos=[
  {text: 'Cortar cebolla',  completed: false},
  {text: 'Tomar el curso de introduccion a  React.js',  completed: false},
  {text: 'Hacer  tarea ',  completed: false},
  {text: 'hacer XD',  completed: true},
  {text: 'hacer XD2',  completed: false},
  {text: 'futbol',  completed: true},
];

localStorage.setItem('TODOS_v1', JSON.stringify(defaultTodos) )  ;
*/

function App() {

const  localStorageTodos=localStorage.getItem('TODOS_v1'); 

let  parsedTodos; 

if(!localStorageTodos){   //metodologia  del error fish
  localStorage.setItem('TODOS_v1',  JSON.stringify([]));
    parsedTodos=[];
}else{
  parsedTodos=JSON.parse(localStorageTodos)
}

  const [todos, setTodos]=React.useState(parsedTodos); 
  const [searchValue , setSearchValue]=React.
  useState(''); 

  const completedTodos= todos.filter(todo => todo.completed).length; 
  const totalTodos=  todos.length; 


const  searchedTodos= todos.filter(
  (todo) => {

    return todo.text.toLowerCase().includes(searchValue.toLowerCase()); 

  }

);

const saveTodos= (newTodos) =>{ //recibe un nuevo  array de TODOS para actualizar el  estado y el local storage
  localStorage.setItem('TODOS_v1',  JSON.stringify(newTodos));
  setTodos(newTodos); 
}

  const completeTodo= (text)=>{
    const newTodos= [...todos]; //... crea una copia de todos
    const todoIndex= newTodos.findIndex(
      (todo) => todo.text == text
    )
    newTodos[todoIndex].completed=true; 
    saveTodos(newTodos); 
  }

  const deleteTodo= (text)=>{
    const newTodos= [...todos]; //... crea una copia de todos
    const todoIndex= newTodos.findIndex(
      (todo) => todo.text == text
    )
    newTodos.splice(todoIndex, 1); 
    saveTodos(newTodos); 
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
