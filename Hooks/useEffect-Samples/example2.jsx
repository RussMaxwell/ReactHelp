import { useState, useEffect } from "react";

const url = "https://pokeapi.co/api/v2/pokemon?offset=5&limit=5";

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  
  const fetchData = async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      const pokemon = data.results;
      setPokemon(pokemon);      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {pokemon.map((item) => {
        return (
          <div>
            <br></br>
            <h4>{item.name}</h4>
            <br></br>
          </div>
        );
      })}
    </div>
  );
};

export default App;
