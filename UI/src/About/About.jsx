import React from "react";

const About = ()=>{
   return (
    <>
    {/* <!--about section start --> */}
    <div class="about_section layout_padding">
         <div class="container">
            <h1 class="about_taital">About Us</h1>
            <p class="about_text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui culpa earum saepe impedit molestiae quo.</p>
            <div class="about_section_2">
               <div class="row">
                  <div class="col-lg-6">
                     <div class="about_image"><img src="assets/images/about-img.png"alt=""/></div>
                  </div>
                  <div class="col-lg-6">
                     <div class="about_taital_main">
                        <p class="lorem_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words </p>
                        <div class="read_bt"><a>Read More</a></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!--about section end --> */}
    </>
   )
}
export default About;