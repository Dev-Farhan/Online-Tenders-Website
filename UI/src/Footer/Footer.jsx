/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-lone-blocks */
import React,{useState,useEffect} from "react";
import SetAdminFooter from "../Admin/SetAdminFooter";
import SetUserFooter from "../User/SetUserFooter";

const Footer = ()=>{
     const [FooterContent,setFooterContent]=useState();

     useEffect(()=>{
      setInterval(()=>{
           // eslint-disable-next-line eqeqeq
           if(localStorage.getItem("role")=="admin")
         {
            setFooterContent(<SetAdminFooter/>)
         }
         else if(localStorage.getItem("role")=="user")
         {
            setFooterContent(<SetUserFooter/>)
         } 
         else 
         {
            setFooterContent(<>
      <div className="footer_section layout_padding">
      <div className="container">
         <div className="location_main">
            <div className="location_text"><img src="assets/images/map-icon.png"alt=""/><span className="padding_left_10"><a>Location</a></span></div>
            <div className="location_text center"><img src="assets/images/call-icon.png"alt=""/><span className="padding_left_10"><a>Call : 01 1234567890</a></span></div>
            <div className="location_text right"><img src="assets/images/mail-icon.png"alt=""/><span className="padding_left_10"><a>example@gmail.com</a></span></div>
         </div>
         <div className="footer_section_2">
            <div className="row">
               <div className="col-lg-4">
                  <h2 className="footer_taital">About</h2>
                  <p className="footer_text">There are many variations of passages of Lorem Ipsum available, but the majority havThere are many variations of passages of Lorem Ipsum available, but the majority hav</p>
               </div>
               <div className="col-lg-4">
                  <h2 className="footer_taital">Services Link</h2>
                  <p className="footer_text">There are many variations of passages of Lorem Ipsum available, but the majority havThere are many variations of passages of Lorem Ipsum available, but the majority hav</p>
               </div>
               <div className="col-lg-4">
                  <h2 className="footer_taital">Subscribe</h2>
                  <input type="text" className="Enter_text" placeholder="Enter Your Email" name="Enter Your Email"/>
                  <div className="subscribe_bt"><a>Subscribe</a></div>
                  <div className="social_icon">
                     <ul>
                        <li><a><img src="assets/images/fb-icon.png"alt=""/></a></li>
                        <li><a><img src="assets/images/twitter-icon.png"alt=""/></a></li>
                        <li><a><img src="assets/images/linkedin-icon.png"alt=""/></a></li>
                        <li><a><img src="assets/images/instagram-icon.png"alt=""/></a></li>
                        <li><a><img src="assets/images/youtub-icon.png"alt=""/></a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
    <div className="copyright_section">
      <div className="container">
         <p className="copyright_text">Copyright 2025 All Rights Reserved. Tenders</p>
      </div>
   </div></>);
         }
      },1000);
     },[])
    return(
        <>
        {FooterContent}
        </>
    )
}
export default Footer;