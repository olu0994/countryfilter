import React, { useState } from "react";
import "./App.css";
import countryData from "./country";
import country from "./country";

function App() {
  const [names, setNames] = useState([getNamesLocalStorage()]);
  const [input, setInput] = useState();

  function getNamesLocalStorage() {
    let namesFromLocalStorage = localStorage.getItem("names");
    if (namesFromLocalStorage == null) {
      localStorage.setItem("names", JSON.stringify([]))
      return [];
    }
    return JSON.parse(namesFromLocalStorage)
  }

  function setNamesLocalStorage(suggestedNames) {
     localStorage.setItem("names", JSON.stringify(suggestedNames))
  }



  function handlesuggestions(userInput) {
    let suggestedNames = countryData.filter((country) =>
      country.toLowerCase().startsWith(userInput.toLowerCase())
    );
    setNames(suggestedNames);
    setNamesLocalStorage(suggestedNames)
  }

  function handleInput(e) {
    if (e.target.value !== "") {
      handlesuggestions(e.target.value);
    } else {
      setNames([]);
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
        {names.map((name) => (
          <p>{name}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
