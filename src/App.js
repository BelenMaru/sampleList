import React, {useState} from "react";
import "./App.css";
import SampleForm from "./components/SampleForm";

function App() {
  const [todos, setTodos] = useState([])
  const addList = (text) => {
    let id = 1;
    if(todos.length > 0) {
      id = todos[0].id + 1
    }
    let todo ={id: id, text: text, completed: false}
    let newTodos = [todo, ...todos]
    console.log(newTodos)
    setTodos(newTodos)


  }
  return (
    <div className="sample-lists">
      <h1>Sample Todo Lists</h1>
      <SampleForm  addList ={addList}/>
    </div>
  );
}

export default App;
