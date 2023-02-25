/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
const SetAdmin= ()=>{
   return(
    <>
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="logo"><a href="index.html"><img src="assets/images/logo1.png"alt=""/></a></div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                     <a class="nav-link"><Link to="/admin">Admin Home</Link></a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link"><Link to="/manageusers">Manage User</Link></a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link"><Link to="/addcategory">Add Category</Link></a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link"><Link to="/addsubcategory">Add SubCategory</Link></a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link"><Link to="/logout">Logout</Link></a>
                  </li>
               </ul>
               
            </div>
         </nav>
         
    </>
   )
}
export default SetAdmin;