import { Link } from "react-router-dom";

//styles and icons
import "./Navbar.css";
import Temple from "../../assets/temple.svg";

import React from "react";

export default function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="logo" />
          <span>The Dogo</span>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <button className="btn">LogOut</button>
        </li>
      </ul>
    </div>
  );
}
