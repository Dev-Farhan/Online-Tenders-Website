/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { _apiURLUser } from "../apiURL";
const Register = ()=>{
       const [output,setOutput]=useState();
       const [name,setName]=useState();
       const [email,setEmail]=useState();
       const [password,setPassword]=useState();
       const [mobile,setMobile]=useState();
       const [address,setAddress]=useState();
       const [city,setCity]=useState();
       const [gender,setGender]=useState();
 
     const handleSumit=(evt)=>{
      // alert("working of handlesumbit")
      evt.preventDefault();
      // alert("its working")
      // alert(gender)
         var userDetails = {
          "name":name,
          "email":email,
          "password":password,
          "mobile":mobile,
          "address":address,
          "city":city,
          "gender":gender
        };
        axios.post(_apiURLUser+"save",userDetails).then((res)=>{
          // console.log(res);
          // alert("success")
          if(res.data.status)
          setOutput("User Registerion Successfull");
          else
          setOutput("User Registerion Failed");
          setName('');
          setEmail('');
          setPassword('');
          setMobile('')
          setAddress('');
          setCity('');
        });

     }
     return(
        <>
        {/* <!-- services section start --> */}
      <div class="services_section layout_padding">
         <div class="container">
            {/* <h1 class="services_taital">Register</h1> */}
            {/* <p class="about_text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui culpa earum saepe impedit molestiae quo.</p> */}
            <div class="services_section_2">
            <form onSubmit={handleSumit}>
        <h3>Sign Up</h3>
        <h4 style={{"color":"green"}}>{output}</h4>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(evt)=>
              setName(evt.target.value)}
            value={name}
          />
        </div>
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
        <div className="mb-3">
          <label>Mobile</label>
          <input
            type="String"
            className="form-control"
            placeholder="Enter mobile number"
            onChange={(evt)=>
              setMobile(evt.target.value)}
            value={mobile}
          />
        </div>
        <div className="mb-3">
          <label>Address</label>
          <input
            type="String"
            className="form-control"
            placeholder="Enter address"
            onChange={(evt)=>
              setAddress(evt.target.value)}
            value={address}
          />
        </div>
        <div className="mb-3">
          <label>City</label>
          <input
            type="String"
            className="form-control"
            placeholder="Enter city"
            onChange={(evt)=>
              setCity(evt.target.value)}
            value={city}
          />
        </div>
        <div class="mb-3">
      <label for="gender">Gender </label><br/>
      <input type="radio"
             value="male" 
             name="gender"
             onChange={(evt)=>
              setGender(evt.target.value)}             
             /> Male &nbsp;&nbsp;
      <input type="radio"
             value="female" 
             name="gender"
             onChange={(evt)=>
              setGender(evt.target.value)}
             /> Female
    </div>
        <div className="d-grid">
          <button type="submit" class="btn btn-success">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-center">
          Already registered <a><Link to="/login">sign in?</Link></a>
        </p>
      </form>
            </div>
         </div>
      </div>
      {/* <!-- services section end --> */}
        </>
     )
}
export default Register;