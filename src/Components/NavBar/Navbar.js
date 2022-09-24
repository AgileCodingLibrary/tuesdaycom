import { Link } from "react-router-dom";
import React from "react";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

//styles and icons
import "./Navbar.css";
import Temple from "../../assets/temple.svg";

export default function NavBar() {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();
  return (
    <div className='navbar'>
      <ul>
        <li className='logo'>
          <img src={Temple} alt='logo' />
          <span>The Dogo</span>
        </li>
        {!user && (
          <li>
            <Link to='/login'>Login</Link>
          </li>
        )}
        {!user && (
          <li>
            <Link to='/signup'>Signup</Link>
          </li>
        )}
        {user && (
          <div>
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
          </div>
        )}
      </ul>
    </div>
  );
}
