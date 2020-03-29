import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#myDropDown"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="myDropDown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link text-white" href="/">
              <i className="fas fa-home mr-1"></i>Home
            </a>
          </li>

          <li className="nav-item">
            <NavLink to="/Login" className="nav-link text-white">
              <i className="far fa-user-circle mr-1"></i> Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Register" className="nav-link text-white">
              <i class="fas fa-user-plus mr-1"></i>
              Register
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/Cities" className="nav-link text-white">
              <i className="fas fa-city mr-1"></i>
              Cities
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
