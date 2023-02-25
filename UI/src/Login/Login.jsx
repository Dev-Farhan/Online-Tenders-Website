/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable eqeqeq */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { _apiURLUser } from "../apiURL";
const Login = ()=>{

     const navigate=useNavigate();
     const [output,setOutput]=useState();
     const [email,setEmail]=useState();
     const [password,setPassword]=useState();
     const login=(event)=>{
        event.preventDefault();
        var userDetails = {
         "email":email,
         "password":password
        }
        axios.post(_apiURLUser+"login",userDetails)
        .then((res)=>{
        //  console.log()
         //to store user data to localstorage
         const resData = res.data.userDetails;
         // console.log(res.data);
        //  console.log(res.data); 
         localStorage.setItem("token",res.data.token);
         localStorage.setItem("_id",resData._id);
         localStorage.setItem("name",resData.name);
         localStorage.setItem("email",resData.email);
         localStorage.setItem("password",resData.password);
         localStorage.setItem("mobile",resData.mobile);
         localStorage.setItem("address",resData.address); 
         localStorage.setItem("city",resData.city);
         localStorage.setItem("gender",resData.gender);
         localStorage.setItem("role",resData.role);
         localStorage.setItem("info",resData.info);

         resData.role=="admin"?navigate("/admin"):navigate("/user");
      }).catch((error)=>{
         console.log(error)
          setOutput("Invalid user or verify your account....");
          setEmail('');
          setPassword('');
      })
   }

     

     return(
        <>
        {/* <!-- services section start --> */}
      <div class="services_section layout_padding">
         <div class="container">
            <div class="services_section_2">
               <form onSubmit={login}>
               <h3>Sign In</h3>
        <h4 style={{"color":"green"}}>{output}</h4>
               <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(evt)=>
              setEmail(evt.target.value)}
            value={email}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(evt)=>
              setPassword(evt.target.value)}
            value={password}
            
          />
        </div>
        <div className="d-grid">
          <button type="submit" class="btn btn-success">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-center">
          Create New Account <a><Link to="/register">sign up?</Link></a>
        </p>
               </form>
            </div>
          </div> 
        </div>
      {/* <!-- services section end --> */}
        </>
     )
}
export default Login;
