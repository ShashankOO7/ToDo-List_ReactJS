import React from "react";

const ToDoList = (props) => {



  return (
  <>
  <div className="todo_style">
    <li>
      {props.text}
      <button className="close" onClick={()=>{
        props.onSelect(props.id)
      }}>X</button>
    </li>
  </div>
  </>)
};
export default ToDoList;
