import React ,  { useReducer, createContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Contact from "./components/Contact";
import About from "./components/About";
import Register from "./components/Register";
import Logout from "./components/Logout";
import Error from "./components/Error";
import { Route,Switch } from "react-router-dom";
import "./App.css"
import { initialState , reducer } from "../src/reducer/UseReducer";

export const UserContext = createContext();



const Routing = () =>{
  return (
    <Switch>
    <Route exact path="/" >
      <Home />
    </Route>
 
	<Route path="/Login" >
      <Login />
    </Route>
    
	<Route path ="/Register">
      <Register />
    </Route>

    <Route path ="/About">
      <About />
    </Route>

    <Route path ="/Contact">
      <Contact />
    </Route>

    <Route path ="/Logout">
      <Logout />
    </Route>
    <Route>
      <Error />
    </Route>
    
	</Switch>
  )
}  


const App =() =>{
    const [state, dispatch] = useReducer(reducer, initialState);
    
 return(
    <>
    <UserContext.Provider value ={{ state,dispatch }} >
    
    <Navbar />
    <Routing />    
	  </UserContext.Provider>
    </>
  )
  
}
export default App;