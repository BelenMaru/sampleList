import React,{useState} from 'react'

function SampleForm() {
  const [input, setInput] = useState("")
  return (
   <form className= "todo-form">
     <input onChange ={(e) => setInput(e.target.value)} className="todo-input" placeholder="Add a list"/>
     <button className= "sample-btn">Add Lists</button>
   </form>
  )
}

export default SampleForm
