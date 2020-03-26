import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import CharList from "./CharList";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [chars, setChars] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
      .then(res => {
        setChars(res.data.results);
        console.log(chars);
      })
      .catch(error => {
        console.log('uh oh', error)
      })
  },[])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharList chars={chars}/>
    </div>
  );
}

export default App;
