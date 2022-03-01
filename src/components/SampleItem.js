import React from 'react'

function SampleItem(props) {
  return (
    <div className= "sample-row">{props.todo.text}</div>
  )
}

export default SampleItem