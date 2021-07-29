const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); 
require('../db/conn');
const User = require("../model/userSchema");
const authenticate = require("../middleware/authenticate");
router.get('/',(req,res)=>{
    res.send('Hello world');
});

router.post('/Register',  (req,res)=>{
    //data get to from 
    const {name, email , phone , work , password , cpassword } = req.body;
   //check all data present
    if(!name || !email || !phone || !work || !password || !cpassword)
    {
        return res.status(422).json({error:"plz enter all value"})

    }
    //check email already not present
    User.findOne({email:email})
    .then((userExist)=>{ 
        if(userExist)
        { 
        return res.status(422).json({error:"email already exit"});
        }
        else if(password != cpassword)
        {
            return res.status(422).json({error:"password mismatch exit"});
        }else{

        //make user collection
        const user = new User({name, email , phone , work , password , cpassword});
        // hashing method
        
        
        //save the collection
        user.save().then(() =>{
            res.status(201).json({message: "user register successfulluy"});
        })
        .catch((err)=>res.status(500).json({error:"failed registered"}));
    }

    })
    .catch(err => { console.log(err);});
});



router.post('/Login', async (req,res) => {

    try{
        
         const { email , password } = req.body;
         
         if(!email || !password)
         {
             return res.status(400).json({error:"plz filled the data"})
         }
          
         const userLogin = await User.findOne({email:email});
        //25892000000 meas 30 days 
         if(userLogin)
            {    
             const isMatch = await bcrypt.compare(password,userLogin.password);
             const token =  await userLogin.generateAuthToken();
             res.cookie("jwtoken",token,
             {
                expires:new Date(Date.now() + 25892000000),
                httpOnly:true
            });  
             if(isMatch)
             {
                res.json({message:"user login successfully"});
                //console.log(userLogin.phone);
             }
             else
                {
             res.status(400).json({error:"user error"});
                }
            }
                     
           //res.cookie("jwtoken",token,{
             //  expires:new Date(Date.now() + 25892000000),
              // httpOnly:true
 
           //});
      }catch(err)
      {
         console.log(err);
      }
 
    } );

   
     
router.get("/About", authenticate , (req,res) => {
        console.log("hello my about page ");
        res.send(req.rootUser);
});

router.get("/Logout", (req,res) => {
    console.log("hello my logout page ");
    res.clearCookie('jwtoken',{path:'/'});
    res.status(200).send("userlogout");
});

router.get("/getdata", authenticate , (req,res) => {
    console.log("hello  ");
    res.send(req.rootUser);
});


module.exports = router;