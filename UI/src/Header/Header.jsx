/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React , {useState , useEffect} from "react";
import { Link } from "react-router-dom";
import SetAdmin from "../Admin/SetAdmin";
import Auth from "../Auth/Auth";
import SetUser from "../User/SetUser";

const Header = ()=>{
   const [HeaderContent , setHeaderContent]=useState();

   useEffect(()=>{
      setInterval(()=>{
         if(localStorage.getItem("role")==="admin")
         {
            setHeaderContent(<SetAdmin/>)
         }
         else if(localStorage.getItem("role")==="user")
         {
            setHeaderContent(<SetUser/>)
         }
         else
         {
            setHeaderContent(
       <div class="header_section">
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="logo"><a href="index.html"><img src="assets/images/logo1.png"alt=""/></a></div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                     <a class="nav-link"><Link to="/">Home</Link></a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link"><Link to="/about">About</Link></a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link"><Link to="/service">Service</Link></a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link"><Link to="/contact">Contact</Link></a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link"><Link to="/register">Register</Link></a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link"><Link to="/login">Login</Link></a>
                  </li>
               </ul>
               
            </div>
         </nav>
         <div class="banner_section layout_padding">
            <div class="container-fluid">
               <section class="slide-wrapper">
                  <div class="container-fluid">
                     <div id="myCarousel" class="carousel slide" data-ride="carousel">
                        {/* <!-- Indicators --> */}
                        <ol class="carousel-indicators">
                           <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                           <li data-target="#myCarousel" data-slide-to="1"></li>
                           <li data-target="#myCarousel" data-slide-to="2"></li>
                           <li data-target="#myCarousel" data-slide-to="3"></li>
                           <li data-target="#myCarousel" data-slide-to="4"></li>
                        </ol>
                        {/* <!-- Wrapper for slides --> */}
                        <div class="carousel-inner">
                           <div class="carousel-item active">
                              <div class="container">
                                 <div class="banner_main">
                                    <h1 class="banner_taital">Online Tenders Profit Your Marketing</h1>
                                    <p class="banner_text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui culpa earum saepe impedit molestiae quo.</p>
                                    <div class="btn_main">
                                       <div class="contact_bt active "><a>Contact Us</a></div>
                                       <div class="readmore_bt"><a>Read More</a></div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="carousel-item">
                              <div class="container">
                                 <div class="banner_main">
                                    <h1 class="banner_taital">Online Tenders Profit Your Marketing</h1>
                                    <p class="banner_text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui culpa earum saepe impedit molestiae quo.</p>
                                    <div class="btn_main">
                                       <div class="contact_bt active "><a>Contact Us</a></div>
                                       <div class="readmore_bt"><a>Read More</a></div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="carousel-item">
                              <div class="container">
                                 <div class="banner_main">
                                    <h1 class="banner_taital">Online Tenders Profit Your Marketing</h1>
                                    <p class="banner_text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui culpa earum saepe impedit molestiae quo.</p>
                                    <div class="btn_main">
                                       <div class="contact_bt active "><a>Contact Us</a></div>
                                       <div class="readmore_bt"><a>Read More</a></div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="carousel-item">
                              <div class="container">
                                 <div class="banner_main">
                                    <h1 class="banner_taital">Online Tenders Profit Your Marketing</h1>
                                    <p class="banner_text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui culpa earum saepe impedit molestiae quo.</p>
                                    <div class="btn_main">
                                       <div class="contact_bt active "><a>Contact Us</a></div>
                                       <div class="readmore_bt"><a>Read More</a></div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="carousel-item">
                              <div class="container">
                                 <div class="banner_main">
                                    <h1 class="banner_taital">Online Tenders Profit Your Marketing</h1>
                                    <p class="banner_text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui culpa earum saepe impedit molestiae quo.</p>
                                    <div class="btn_main">
                                       <div class="contact_bt active "><a>Contact Us</a></div>
                                       <div class="readmore_bt"><a>Read More</a></div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
            </div>
         </div>
         </div>
           )
         }
      },1000);
   },[]);
    return (
       <>
       <Auth/>
       {HeaderContent}
       </>
    )
}
export default Header;