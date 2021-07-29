import React,{ useEffect,useState } from "react";
import { useHistory } from "react-router-dom";
const About =() =>{
  const history =useHistory();
   const [userData,setUserData] = useState('');
  const callAboutPage = async () => {
          try{

              const res = await fetch('/About',{
                method:"GET",
                headers:{
                  Accept:"application/json",
                  "content-Type":"application/json"
                },
                credentials:"include"
              });

              const data = await res.json();
              
              setUserData(data);
              if(!res.status === 200)
              {
                const error = new Error(res.error);
                throw error;
              }

          }
          catch(error)
          {
             console.log(error); 
            history.push("/login");
            }
    }


      useEffect(() =>{ 
          callAboutPage();
      });
  return(
    <>
    <section className="About">
        <div className ="container mt-5">
          <div className="About-content">
            <div className="card text-center">
               
                <div className="card-body">
                     <div className="row">
                      <div className="col-md-4">
                      
                      </div>
                      <div className="col-md-4">
                    <h1 className="h1">  <i class="fas fa-user-tie"></i></h1>
                      </div>
                      <div className="col-md-4">
                      
                      </div>
                     </div>
                       <br /> 
                     <div className="row">
                      <div className="col-md-2">
                      
                      </div>
                      <div className="col-md-4">
                      <h4>Name:</h4> 
                      </div>
                      <div className="col-md-4">
                    <h4>  {userData.name}</h4>
                      </div>
                      <div className="col-md-2">
                      
                      </div>
                     </div>
                     <br /> 
                     <div className="row">
                      <div className="col-md-2">
                      
                      </div>
                      <div className="col-md-4">
                    <h4>EMAIL:</h4>
                      </div>
                      <div className="col-md-4">
                    <h4> {userData.email} </h4>
                      </div>
                      <div className="col-md-2">
                      
                      </div>
                     </div> 
                     <br /> 
                     <div className="row">
                      <div className="col-md-2">
                      
                      </div>
                      <div className="col-md-4">
                    <h4>Phone: </h4>
                      </div>
                      <div className="col-md-4">
                    <h4>  {userData.phone}</h4>
                      </div>
                      <div className="col-md-2">
                      
                      </div>
                     </div>           
                     <br /> 
                     <div className="row">
                      <div className="col-md-2">
                      
                      </div>
                      <div className="col-md-4">
                      <h4>Profession: </h4>
                      </div>
                      
                      <div className="col-md-4 ">
                    <h4>{userData.work}</h4>
                      </div>
                      <div className="col-md-2">
                      
                      </div>
                     </div>        
              </div>
                              
            </div>
          </div>
        </div>
    </section>
    </>
  )
  
}
export default About;