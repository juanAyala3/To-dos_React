import './TodoItem.css'; 
import {CompleteIcon} from './CompleteIcon'
import {DeleteIcon} from './DeleteIcon'


function TodoItem(props){
    return (
      <li className="TodoItem">
      <CompleteIcon 
        completed={props.completed}
        onComplete={props.onComplete}
      />
        {/*<span 
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}
        `}
        onClick={props.onComplete}
        > V {props.completed}
        </span>*/}
        <p className={`TodoItem-p
        ${props.completed && "TodoItem-p--complete"}`}>  {/*Clase dinamica con codigo JS para tachar las tareas completadas */}
        {props.text}
        </p>

        <DeleteIcon
          onDelete={props.onDelete}
         />
        
       {/* <span className='Icon Icon-delete'
        onClick={props.onDelete}
        >
        X
        </span>*/}
        
      </li>
    ); 
  }

  export  {TodoItem};