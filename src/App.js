import React, {useState} from "react";
import "./App.css";
import SampleForm from "./components/SampleForm";
import SampleItem from "./components/SampleItem";

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

  const removeTodo =(id) => {
    let updatedTodos = [...todos].filter((todo)=> todo.id !=id)
    setTodos(updatedTodos)
  }
  const completeTodo =(id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id ===id) {
        todo.completed =!todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)

  }
  return (
    <div className="sample-lists">
      <h1>Todo Lists</h1>
      <SampleForm  addList ={addList}/>
      {todos.map((todo)=> {
        return (
          <SampleItem removeTodo ={removeTodo} completeTodo={completeTodo} todo={todo} key={todo.id} />
        )
      })}
    </div>
  );
}

export default App;
