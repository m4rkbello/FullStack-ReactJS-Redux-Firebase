import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import { NavLink } from "react-router-dom";

const SignInLinks = () => {
  return (
    <ul className="right">
      <li><NavLink exact={true} to='/create'>New Project</NavLink></li>
      <li><NavLink exact={true} to='/signup'>Logout</NavLink></li>
      <li><NavLink exact={true} to='/' className='btn btn-floating pink lighten-1'>M4RK</NavLink></li>
    </ul>
  );
}

export default SignInLinks;
