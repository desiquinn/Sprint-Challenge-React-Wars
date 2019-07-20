import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Button } from "semantic-ui-react";


import Characters from "./components/Characters";


import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [starWarsState, setStarWarsState] = useState([]);
  const [next, setNext]= useState("")
  const [prev, setPrev] = useState("")
  const [page, setPage] = useState("https://swapi.co/api/people/?format=json")


  useEffect( () => {
    axios.get(page)
    // using mock API because Swapi broke
      .then(response => {
        console.log(response.data)
        setStarWarsState(response.data.results)



        console.log(response.data.next)
        if(response.data.next === null){
          setNext("https://swapi.co/api/people/?page=1")
        } else { setNext(response.data.next) }



        console.log(response.data.previous)
        if(response.data.previous === null){
          setPrev("https://swapi.co/api/people/?page=9")
        } else { setPrev(response.data.previous) }

      })
      .catch(error => {
        console.log("The Force is NOT With You", error)
      })
  },[page]);


  function getURL(url) {
    axios.get(url)
      .then(response => {
        return setStarWarsState(response.data.results)})

  }


  function passNewPage(url) {
    axios.get(url)
    .then(response => {
      setPage(url)
      setNext(response.data.next)
      setPrev(response.data.previous)
      return getURL(url)})
  }


  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any. API *** https://swapi.co/api/people/?format=json  has 10 people*** https://henry-mock-swapi.herokuapp.com/api

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
            onClick={() => passNewPage(prev)}
            color="purple"
          />
      <Button
            attached='bottom'
            content='Next'
            onClick={() => passNewPage(next)}
            color="teal"
          />
        </div>
    </div>
  );
}

export default App;
