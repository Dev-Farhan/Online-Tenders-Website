import React from "react";
const Contact = ()=>{
    return(
        <>
            {/* <!-- contact section start --> */}
      <div class="contact_section layout_padding margin_top90">
         <div class="container">
            <h1 class="contact_taital">Get In Touch</h1>
            <p class="contact_text">majority have suffered alteration in some form, by injected humour, or </p>
            <div class="contact_section_2 layout_padding">
               <div class="row">
                  <div class="col-md-6">
                     <div class="contact_main">
                        <input type="text" class="mail_text" placeholder="Full Name" name="Full Name"/>
                        <input type="text" class="mail_text" placeholder="Phone Number" name="Phone Number"/>
                        <input type="text" class="mail_text" placeholder="Email" name="Email"/>
                        <textarea class="massage-bt" placeholder="Message" rows="5" id="comment" name="Massage"></textarea>
                        <div class="send_bt"><a>SEND</a></div>
                     </div>
                  </div>
                  <div class="col-md-6">
                     <div class="map_main">
                        <div class="map-responsive">
                           {/* <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="600" height="400" frameborder="0" style="border:0; width: 100%;" allowfullscreen=""></iframe> */}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- contact section end --></div>       */}
        </>
    )
}
export default Contact;