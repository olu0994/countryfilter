import React,  {useState} from "react";
import "./App.css";
import countryData from "./country";
import country from "./country";


function App() {
  const [names, setNames] = useState([]);
  const [input, setInput] = useState();





  function handlesuggestions(userInput){
    let suggestedNames = countryData.filter((country) => country.toLowerCase().startsWith(userInput.toLowerCase()))
    setNames(suggestedNames)
    

  }

  function handleInput(e){
   
    if(e.target.value !==""){
      handlesuggestions(e.target.value)
    } 
    else{
      setNames([])
    }
  }


  
  return (
    <div className="main">
      <div className="body">
        <h2>Auto Completed</h2>
      </div>
      <div className="middle">
        {" "}
        <input onChange={handleInput}></input>
      </div>
      <div className="end">
        <p>Suggestions:</p>
        {
          names.map((name) => <p>{name}</p>)
        }

      </div>
     
      
    </div>
  );
}

export default App;
