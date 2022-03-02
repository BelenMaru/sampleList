import React from 'react'
import {RiCloseCircleLine} from "react-icons/ri";
import {BiCheckCircle} from "react-icons/bi";

function SampleItem(props) {
  const {todo, removeTodo} = props
  return (
    <div className="sample-row">
      {todo.text}
      <div className="icon-container">
        <RiCloseCircleLine className= "icon" 
        onClick={()=> {removeTodo(todo.id)}}/>
        <BiCheckCircle />
      </div>
    </div>
  );
}

export default SampleItem