import { useState } from "react";

const myComponent = () => {
  const [animal, setAnimal] = useState({
    name: "Beaver",
    age: 2,
    location: "Creek",
  });

  const newLocation = () => {
    const newstate = { ...animal, location: "Lake" };
    setAnimal(newstate);
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
};

export default myComponent;
