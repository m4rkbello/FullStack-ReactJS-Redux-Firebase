import React from "react"; 
import { Link, NavLink  } from "react-router-dom";
import SignInLinks from "./SignInLink";

const SignOutLinks = () => {
    return (
        <ul className="right">
        <li><NavLink exact={true} to='/signup'>Signup</NavLink></li>
        <li><NavLink exact={true} to='/signin'>Login</NavLink></li>
      </ul>
     );
}
 
export default SignOutLinks;