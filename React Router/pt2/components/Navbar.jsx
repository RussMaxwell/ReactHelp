import "../styles/navigation.css";
import { NavLink } from "react-router-dom";
import shoe from "../src/assets/shoe.png";

const NewNavbar = () => {
  return (
    <nav className="navContainer">
      <h2 className="navHeading">
        Joan's
        <span className="navTextColor"> Shoes</span>
      </h2>
      <img src={shoe} alt="logo" className="logo" />
      <div className="navLinksContainer">
        <NavLink to="/" className="navLink">
          Home
        </NavLink>
        <NavLink to="/about" className="navLink">
          About
        </NavLink>
        <NavLink to="/products" className="navLink">
          Products
        </NavLink>
        <NavLink to="/contact" className="navLink">
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default NewNavbar;
