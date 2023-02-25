/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";
import axios from "axios";
import { _apiURLCategory } from "../apiURL";


const Addcategory = ()=>{
   const [file,setFile] = useState();
   const [catName,setCatName] = useState();
   const [output,setOutput] = useState();

   const handleChange=(evt)=>{
    setFile(evt.target.files[0]);
   }

   const handleSumbit = (evt)=>{
    evt.preventDefault();
    var formData = new FormData();
    formData.append("catnm",catName);
    formData.append("caticon",file);
    const config = {
      'content-type':'multipart/form'
    };
    axios.post(_apiURLCategory+"save",formData ,config).then((res)=>{
      setCatName("");
      setOutput("Category Added Successfully...");
    });
   }
   return (
    <>
            {/* <!-- services section start --> */}
            <div class="services_section layout_padding">
         <div class="container">
            <div class="services_section_2">
            <form onSubmit={handleSumbit}>
               <h3>Add Category</h3>
        <h4 style={{"color":"green"}}>{output}</h4>
               <div className="mb-3">
          <label>Category Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Category Name"
            onChange={(evt)=>
              setCatName(evt.target.value)}
            value={catName}
          />
        </div>
        <div className="mb-3">
          <label>Category Icon</label>
          <input
            type="file"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="d-grid">
          <button type="submit" class="btn btn-success">
            Add Category
          </button>
        </div>
               </form>
            </div>
          </div> 
        </div>
      {/* <!-- services section end --> */}
    </>
   )
}
export default Addcategory;