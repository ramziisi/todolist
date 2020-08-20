import React from 'react';

 const ToDoList = (props) => {
  return (
    <div>
    {props.todos.map((el) => (
      <div>
        <h1>{el.todo}</h1>
        <button onClick={() => props.deleteTodo(el)}> delete</button>
        
        <button onClick={() => props.setUpdate(el)}> update</button>
       
      </div>
    ))}
  </div>
      
  )
}
export default ToDoList ;