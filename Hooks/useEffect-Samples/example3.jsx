import { useState, useEffect } from "react";

function App() {
  const [names, setNames] = useState([]);
  const [menutime, setMenuTime] = useState(null);
  const [menuitems, setMenuItems] = useState(null);

  useEffect(() => {
    fetch("/menu.json")
      .then((response) => response.json())
      .then((data) => setNames(data));
  }, []);

  //this works although it's better to use a cb function
  useEffect(() => {
    if (menutime !== null) {
      fetch(`/${menutime}.json`)
        .then((response) => response.json())
        .then((data) => setMenuItems(data));
    }
  }, [menutime]);

  return (
    <>
      <div>
        <h2>Select a button to see a menu</h2>
        {names &&
          names.map((menu) => (
            <button key={menu.id} onClick={() => setMenuTime(menu.name)}>
              {menu.name}
            </button>
          ))}
        <div>
          {menuitems &&
            menuitems.map((entree) => (
              <div key={entree.id}>
                <div>Entree: {entree.item} </div>
                <div>Price: {entree.price}</div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
