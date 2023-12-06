import React from "react"; 
import { Link } from "react-router-dom";
import SignInLinks from "./SignInLink";
import SignOutLinks from "./SignOutLink";


const Navbar = () => {
    return ( 
     
        <nav>
        <div class="nav-wrapper grey darken-3">
            <div className="container">
            <Link to='/' className="1">Polstak</Link>
            <SignInLinks />
            <SignOutLinks />
            </div>
        </div>
      </nav>
            
     );
}
 
export default Navbar;