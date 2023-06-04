import React from 'react';

//Footer Component in ReactJS.

const Footer = () => {
  return (
    <React.Fragment>
      <footer class="bg-neutral-900 text-center text-white" 
      style={{marginTop:"150px"}}>
  <div class="container px-6 pt-6">
    <div class="mb-6 flex justify-center">
   
   <div class='p-5 text-center bg-black'
   >
    <p class='text-white'>
        @2023 Copyright : TaskPlanner
    </p>
   </div>
      
    </div>
    </div>
    </footer>
    </React.Fragment>
  )
}

export default Footer;
