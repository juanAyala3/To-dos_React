
import './TodoCounter.css';

const estilos={
    
    fontSize: 24,
    textAlign: 'center',
    margin: 0,
    padding: '48px'


}

function TodoCounter({ total, completed}){
    return (
    <h1 className="TodoCounter">
        Probando la NUEVA RAMA ; Has completado  <span> {completed} </span>  de   
         <span> {total}</span> TODOS
    </h1>
        );
  }

  export { TodoCounter };