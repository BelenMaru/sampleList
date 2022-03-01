import React,{useState} from 'react'


function SampleForm() {
  const [input, setInput] = useState("")

  const handleSubmit =(e) => {
    e.preventDefault()

  }
  return (
   <form onSubmit={handleSubmit} className= "todo-form">
     <input onChange ={(e) => setInput(e.target.value)} 
     className="todo-input" 
     placeholder="Add a list"/>
     <button type="submit" className= "sample-btn">Add Lists</button>
   </form>
  )
}

export default SampleForm
