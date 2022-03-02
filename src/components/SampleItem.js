import React from 'react'
import {RiCloseCircleLine} from "react-icons/ri";

function SampleItem(props) {
  return (
    <div className="sample-row">
      {props.todo.text}
      <div className="icon-container">
        <RiCloseCircleLine className= "icon"/>
      </div>
    </div>
  );
}

export default SampleItem