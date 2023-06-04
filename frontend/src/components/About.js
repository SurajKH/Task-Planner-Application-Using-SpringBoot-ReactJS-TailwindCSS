import React from 'react';
import AdminView from './AdminView';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <React.Fragment>
    <div className="content-center"
    >
     <p class='text-2xl text-center py-12 px-12'>About Us
     
     <FontAwesomeIcon icon={faInbox} style={{marginLeft:"10px"}} size='text-2xl'/>
     
     </p>
    </div>
   
<p class="mb-3 text-black dark:text-gray-400 text-center text-2xl">One Stop Solution for Managing all Tasks  <FontAwesomeIcon icon={faBriefcase} style={{marginLeft:"10px"}} size='text-2xl'/> </p>
<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 mx-auto w-1/2">
<div class="max-w-sm rounded overflow-hidden shadow-lg mb-3">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Admin Privileges</div>
    <p class="text-gray-700 text-base">
      We Tackle Security Issues by providing Authentication for users with Admin Privileges.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2 mb-3">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Security</span>
    
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Authentication</span>
  </div>
</div>

<div class="max-w-sm rounded overflow-hidden shadow-lg mb-3">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Tasks Analysis with Intuitive Visualizations</div>
    <p class="text-gray-700 text-base">
      We Provide Statistical Visualizations throught which users can easily analyse various tasks in an efficient manner.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2 mb-3">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Statistics</span>

    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Visualizations</span>
    
  </div>
</div>

<div class="max-w-sm rounded overflow-hidden shadow-lg mb-3">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Task Management Services</div>
    <p class="text-gray-700 text-base">
     Users can easily access and get to track several Tasks as we have considered storing all the tasks in a effective manner.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2 mb-3">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Tasks Management</span>
    
    
  </div>

  

</div>

<div class="max-w-sm rounded overflow-hidden shadow-lg mb-3">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Classification of Tasks Based on Priority</div>
    <p class="text-gray-700 text-base">
     Users can easily get to know the segregation of Various Tasks based on the Priority of the different tasks.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2 mb-3">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Priority</span>
    
    
  </div>

  

</div>


{/* <div class="max-w-sm rounded overflow-hidden shadow-lg mb-3">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Products and Order Statistics</div>
    <p class="text-gray-700 text-base">
      Products and Order Statistics to keep track of all the Products and Orders in the Inventory.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2 mb-3">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Statistics</span>
    
  </div>
</div> */}
</div>
</React.Fragment>
  )
};


export default About;
