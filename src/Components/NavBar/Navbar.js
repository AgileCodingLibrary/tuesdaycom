import { Link } from "react-router-dom";
import React from "react";
import { useLogout } from "../../hooks/useLogout";

//styles and icons
import "./Navbar.css";
import Temple from "../../assets/temple.svg";

export default function NavBar() {
  const { logout, error, isPending } = useLogout();
  return (
    <div className='navbar'>
      <ul>
        <li className='logo'>
          <img src={Temple} alt='logo' />
          <span>The Dogo</span>
        </li>

        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/signup'>Signup</Link>
        </li>
        <li>
          {!isPending && (
            <button className='btn' onClick={logout}>
              LogOut
            </button>
          )}
          {isPending && (
            <button className='btn' disabled>
              Logging out
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}
