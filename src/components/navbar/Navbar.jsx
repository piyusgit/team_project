import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <nav>
      <div
        className="menu"
        onClick={() => {
          setMenuActive(!menuActive);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuActive ? "isActive" : ""}>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/refer">Refer&Earn</NavLink>
        </li>
        <li>
          <NavLink to="/signup">SignUp</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};
