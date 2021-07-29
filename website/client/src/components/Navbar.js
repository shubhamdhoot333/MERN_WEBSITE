import React,{ useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../App";
const Navbar =() =>{
    const  { state , dispatch } = useContext(UserContext);
    const RenderMenu = () =>{
        if(state){
            return (
                <>
                         

                <li className="nav-item">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/About">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                </li>
               
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Logout">Logout</NavLink>
                </li>


                   
                </>
            )
        }
        else {
            return(
                <>

<li className="nav-item">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/About">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Login">Login</NavLink>
                </li>
                
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Register">Register</NavLink>
                </li>





             

                </>
            )
        }
    }

    return(
    <>
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="container-fluid">
        <h4> <font color="blue"><i className="fas fa-crown">  </i> </font>Shyam <font color="blue"> Sarkar</font></h4>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav  ">
                    <RenderMenu />
              
           </ul>
      
    </div>
  </div>
</nav>
    </div>
    </>
  )
  
}
export default Navbar;