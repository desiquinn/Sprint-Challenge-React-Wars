import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Button } from "semantic-ui-react";


import Characters from "./components/Characters";


import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [starWarsState, setStarWarsState] = useState([]);
  // const [next, setNext]= useState("")
  // const [prev, setPrev] = useState("")
  // const [page, setPage] = useState("https://henry-mock-swapi.herokuapp.com/api")


  useEffect( () => {
    axios.get("https://swapi.co/api/people/?format=json")
    // using mock API because Swapi broke
      .then(response => {
        console.log(response.data.results)
        setStarWarsState(response.data.results)
        // console.log(response.data.next)
        // setNext(response.data.next)
        // console.log(response.data.previous)
        // setPrev(response.data.previous)
      })
      .catch(error => {
        console.log("The Force is NOT With You", error)
      })
  },[]);





  console.log(starWarsState)

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any. API *** https://swapi.co/api/people/?format=json  has 10 people***

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="Info">
      {starWarsState.map( (character, i) => {
      return <Characters character={character} key={i}/> })}
      </div>
      <div className="Buttonwrapper">
      <Button
            attached='bottom'
            content='Prev'
            // onClick={setPage(prev)}
            color="purple"
          />
      <Button
            attached='bottom'
            content='Next'
            // onClick={setPage(next)}
            color="teal"
          />
        </div>
    </div>
  );
}

export default App;
