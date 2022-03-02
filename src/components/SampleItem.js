import React from 'react'
import {RiCloseCircleLine} from "react-icons/ri";

function SampleItem(props) {
  const {todo, removeTodo} = props
  return (
    <div className="sample-row">
      {todo.text}
      <div className="icon-container">
        <RiCloseCircleLine className= "icon" onClick={()=> {removeTodo(todo.id)}}/>
      </div>
    </div>
  );
}

export default SampleItem