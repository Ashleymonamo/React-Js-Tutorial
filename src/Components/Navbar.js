// import './App.css'
 import {Link} from "react-router-dom";
export default function Navbar() {
    
    return(
   
         <nav>
   <Link className="navLinks" to="/">
        Home
   </Link>
   <Link className="navLinks" to="/About">
   About Us
   </Link>
   <Link className="navLinks" to="/Login">
        Login
   </Link>
   

{/* <a className="navLinks" href="/">Home</a>
<a className="navLinks" href="/About">About Us</a>
<a className="navLinks" href="/Login">Login</a> */}
         </nav>
    );
    
}