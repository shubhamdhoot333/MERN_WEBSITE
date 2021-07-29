import React, { useEffect,useContext }  from 'react'
import { useHistory } from "react-router-dom";

import {UserContext } from "../App";
const Logout = () => {
   
   const {state,dispatch } = useContext(UserContext);
    const history =useHistory();
                        useEffect(() => {
                        fetch('/Logout',
                        {
                            method:"GET",
                            header:{
                                    Accept:"application/json",
                                    "content-Type":"application/json"   
                                   },
                                    credentials:"include"
                        
                        })
                         .then((res) =>
                          {
                             dispatch({ type:"USER", payload:false }) 
                             history.push('/Login',{ replace:true } );
                             if(!res.status === 200 )
                             {
                                throw res.error;
                                
                            }
                         }).catch((err) =>{ 
                             console.log(err);
                             });
                        
                         });


    return (
        <div>
            <h1>logout ka page </h1>
        </div>
    )
}

export default Logout
