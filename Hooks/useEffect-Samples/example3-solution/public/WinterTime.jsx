import { useState, useEffect } from "react";

const WinterTime = () => {
  const [daysofwinter, setValue] = useState(0);

  const winterTime = () => {
    console.log("hello winter");
    setValue(daysofwinter + 1);
  };
  
  //use effect hook
  useEffect(() => {
    winterTime();
  }, []);

  return (
    <div>
      <h1>value : {daysofwinter}</h1>
      <button className="btn" onClick={() => setValue(daysofwinter + 1)}>
        Days of Winter
      </button>
    </div>
  );
};

export default WinterTime;


