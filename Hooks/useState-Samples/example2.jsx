import { useState } from "react";

function App() {
  const [animal, setAnimal] = useState({
    name: "Beaver",
    age: 2,
    location: "Creek",
  });

  //ensures state update is completed - handles async
  const newLocation = () => {
    setAnimal((currentState) => {
      const newState = { ...currentState, location: "Lake" };
      return newState;
    });
  };

  return (
    <>
      <h4>{animal.name} </h4>
      <h4>{animal.age}</h4>
      <h4>{animal.location}</h4>
      <br></br>
      <button type="btn" onClick={newLocation}>
        Change Location
      </button>
    </>
  );
}

export default App;
