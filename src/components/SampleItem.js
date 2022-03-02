import React from 'react'
import {RiCloseCircleLine} from "react-icons/ri";
import {BiCheckCircle} from "react-icons/bi";

function SampleItem(props) {
  const {todo, removeTodo, completeTodo} = props
  return (
    <div className={todo.completed ? "sample-row complete" : "sample-row" }>
      {todo.text}
      <div className="icon-container">
        <RiCloseCircleLine 
        onClick={()=> {removeTodo(todo.id)}}/>
        <BiCheckCircle onClick={()=> completeTodo(todo.id)} />
      </div>
    </div>
  );
}

export default SampleItem