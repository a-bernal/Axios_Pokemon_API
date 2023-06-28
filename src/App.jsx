import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=1281").then((response) => {
        setPokemon(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <div className="title">
        <h1>Pokemon API List</h1>
      </div>
        <ul>
          {pokemon.map((pokemon, index) => (
            // map = creates a new array
            <li key={index}>{pokemon.name}</li>
          ))}
        </ul>
    </div>
  );
}

export default App;