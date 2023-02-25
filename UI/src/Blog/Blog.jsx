import React from "react";
const Blog = ()=>{
   
    return(
        <>
         {/* <!-- blog section start --> */}
      <div class="blog_section layout_padding">
         <div class="container">
            <div class="row">
               <div class="col-md-6">
                  <div class="blog_img"><img src="assets/images/blog-img.png"alt=""/></div>
               </div>
               <div class="col-md-6">
                  <h1 class="blog_taital">Easily Grow Your Business Earn More Money</h1>
                  <p class="blog_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words There uffered alteration in some form, by injected humour, or randomised words </p>
                  <div class="read_bt"><a>Read More</a></div>
               </div>
            </div>
         </div>
      </div>
      <br/><br/>
      {/* <!-- blog section end --> */}
        </>
    )
}
export default Blog;