import "./App.css";
import SampleForm from "./components/SampleForm";

function App() {
  const addList = (text) => {

  }
  return (
    <div className="sample-lists">
      <h1>Sample todo Lists</h1>
      <SampleForm  addList ={addList}/>
    </div>
  );
}

export default App;
