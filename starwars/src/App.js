import React, {useState, useEffect} from 'react';
import axios from "axios";


import Characters from "./components/Characters";


import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [starWarsState, setStarWarsState] = useState([]);


  useEffect( () => {
    axios.get("https://swapi.co/api/people/?format=json")
      .then(response => {
        console.log(response.data.results)
        setStarWarsState(response.data.results)
      })
      .catch(error => {
        console.log("The Force is NOT With You", error)
      })
  },[]);

  console.log(starWarsState)

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any. API *** https://swapi.co/api/people  has 10 people***

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div>
      {starWarsState.map( (character, i) => {
      return <Characters character={character} key={i}/> })}
      </div>
    </div>
  );
}

export default App;
