import React from "react"; 
import { Link, NavLink  } from "react-router-dom";
import SignInLinks from "./SignInLink";

const SignOutLinks = () => {
    return (
        <ul className="right">
        <li><NavLink to='/'>Signup</NavLink></li>
        <li><NavLink to='/'>Login</NavLink></li>
      </ul>
     );
}
 
export default SignOutLinks;