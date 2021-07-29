import React,{ useEffect,useState }  from "react";

const Home = () =>{

  const [show,setshow]= useState(false);
  const [userData,setUserData] = useState('');
  const callAboutPage = async () => {
          try{

              const res = await fetch('/getdata',{
                method:"GET",
                headers:{
                  Accept:"application/json",
                  "content-Type":"application/json"
                },
                credentials:"include"
              });

              const data = await res.json();
              
              setUserData(data);
              console.log(data);
              setshow(true)
              if(!res.status === 200)
              {
                const error = new Error(res.error);
                throw error;
              }

          }
          catch(error)
          {
             console.log(error); 
            
            }
    }


      useEffect(() =>{ 
          callAboutPage();
      }, [] );
  
  return(
    <>
    <div className="home-page">
    <div className ="home-div">
    <div className="content">
    <h4>welcome</h4>
    <p>{ userData.name } </p>
    <h1>{show ?'Happy to see you ' :  'We are the mern developer' }</h1>
    </div>
    </div>
    </div>
    </>
  )
  
}
export default Home;