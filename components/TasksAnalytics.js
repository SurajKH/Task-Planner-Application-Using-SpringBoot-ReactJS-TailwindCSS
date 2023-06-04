import React,{useState,useRef} from 'react';
// import DisplayTasks from './DisplayTasks';
import DisplayAvaialbleTasks from './DisplayAvailableTasks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faUser,faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const TasksAnalytics = () => {


  //we are setting up of Dates for each of the Priority being considered over here.
    
  //here we are able to access dueDate and we have current Date as well.

  //High Priority Tasks...
    const [date, setDate] = useState('');

    

     const curr=new Date();
     console.log(curr.toDateString());
    //console.log(curr.getMonth());

    const [highPrioritydueDate,sethighPrioritydueDate]=useState({
      currDate:curr.toDateString(),
      DueDate:"Not Yet Selected."
    });

    const [VeryhighPrioritydueDate,setveryhighPrioritydueDate]=useState({
      currDate:curr.toDateString(),
      VeryHighDueDate:"Not Yet Selected."
    });

    const [LowPrioritydueDate,setLowPrioritydueDate]=useState({
      currDate:curr.toDateString(),
      LowDueDate:"Not Yet Selected."
    });
    
   // console.log("High Priority Current Date:" ,highPrioritydueDate.currDate);

     const [currDate,setCurrDate]=useState(curr.toDateString());
    

   

    const dateInputRef = useRef(null);
  
    const handleChange = (e) => {
      setDate(e.target.value);
      const val=e.target.value;
      sethighPrioritydueDate({
       ...highPrioritydueDate,
       [e.target.name]:val
      });
    };

    const handleVeryHighChange=(e)=>
    {
      setDate(e.target.value);
      const val=e.target.value;
      setveryhighPrioritydueDate({
        ...VeryhighPrioritydueDate,[e.target.name]:val
      })
    }
  

    const handleLowChange=(e)=>
    {
      setDate(e.target.value);
      const val=e.target.value;
      setLowPrioritydueDate({
        ...LowPrioritydueDate,[e.target.name]:val
      })
    }

    return (
      <React.Fragment>
     <DisplayAvaialbleTasks/>
      <p style={{textAlign:"center",marginBottom:"12px",
        marginTop:"12px",marginLeft:"2px"}}
        
        class='text-2xl'>Setting Up of Due Dates based on Task Priority (High Category)
        <FontAwesomeIcon 
        style={{marginLeft:"10px"}}
        icon={faCalendarDays} />
        </p>

       

      <div className='flex max-w-xl mx-auto justify-center border-b'>
      
      <input
          
          // class='mx-auto text-center justify-center'
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline mb-5 mt-4"
          type="date"
          name="DueDate"
          onChange={handleChange}
          ref={dateInputRef}
        />
       
      </div>
      {/* <div class='px-8 py-8'>
      <p style={{textAlign:"center",marginBottom:"12px",
        marginTop:"12px",marginLeft:"2px"}}
        
        class='text-2xl'>Current Date : {currDate}
        </p>
      </div> */}

      <div class="bg-white
       justify-center
      w-1/2 mx-auto
      ">
      </div>
     
     {/* <p
       style={{textAlign:"center",marginBottom:"12px",
        marginTop:"12px",marginLeft:"2px"}}
        
        class='text-2xl'
     >Due Date:</p>  */}
     {highPrioritydueDate.DueDate==""?<> 
     <div className='px-6 py-6'>
     <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">Please Select a Due Date for the Tasks Having Priority as Very High.</div> 
     </div>
     </>
     :<>

     <div class='px-6 py-6'>
      <p style={{textAlign:"center",marginBottom:"12px",
        marginTop:"12px",marginLeft:"2px"}}
        
        class='text-2xl'>Due Date: {
          highPrioritydueDate.DueDate
        } 
        </p>
      </div>

     </>}


     <p style={{textAlign:"center",marginBottom:"12px",
        marginTop:"12px",marginLeft:"2px"}}
        
        class='text-2xl'>Setting Up of Due Dates based on Task Priority (Very High Category)
        <FontAwesomeIcon 
        style={{marginLeft:"10px"}}
        icon={faCalendarDays} />
        </p>

        <div className='flex max-w-xl mx-auto justify-center border-b'>
      
      <input
          
          // class='mx-auto text-center justify-center'
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline mb-5 mt-4"
          type="date"
          name="VeryHighDueDate"
          onChange={handleVeryHighChange}
          ref={dateInputRef}
        />
       
      </div>
      {/* <div class='px-8 py-8'>
      <p style={{textAlign:"center",marginBottom:"12px",
        marginTop:"12px",marginLeft:"2px"}}
        
        class='text-2xl'>Current Date : {currDate}
        </p>
      </div> */}

      <div class="bg-white
       justify-center
      w-1/2 mx-auto
      ">
      </div>
{/*      
     <p
       style={{textAlign:"center",marginBottom:"12px",
        marginTop:"12px",marginLeft:"2px"}}
        
        class='text-2xl'
     >Due Date:</p>  */}


     {VeryhighPrioritydueDate.DueDate==""?<> 
     <div className='px-6 py-6'>
     <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">Please Select a Due Date for the Tasks Having Priority as Very High.</div> 
     </div>
     </>
     :<>

     <div class='px-6 py-6'>
      <p style={{textAlign:"center",marginBottom:"12px",
        marginTop:"12px",marginLeft:"2px"}}
        
        class='text-2xl'>Due Date: {
          VeryhighPrioritydueDate.VeryHighDueDate
        } 
        </p>
      </div>

     </>}

     <p style={{textAlign:"center",marginBottom:"12px",
        marginTop:"12px",marginLeft:"2px"}}
        
        class='text-2xl'>Setting Up of Due Dates based on Task Priority (Low Category)
        <FontAwesomeIcon 
        style={{marginLeft:"10px"}}
        icon={faCalendarDays} />
        </p>

        <div className='flex max-w-xl mx-auto justify-center border-b'>
      
      <input
          
          // class='mx-auto text-center justify-center'
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline mb-5 mt-4"
          type="date"
          name="LowDueDate"
          onChange={handleLowChange}
          ref={dateInputRef}
        />
       
      </div>
      {/* <div class='px-8 py-8'>
      <p style={{textAlign:"center",marginBottom:"12px",
        marginTop:"12px",marginLeft:"2px"}}
        
        class='text-2xl'>Current Date : {currDate}
        </p>
      </div> */}

      <div class="bg-white
       justify-center
      w-1/2 mx-auto
      ">
      </div>
     
     {/* <p
       style={{textAlign:"center",marginBottom:"12px",
        marginTop:"12px",marginLeft:"2px"}}
        
        class='text-2xl'
     >Due Date:</p>  */}


     {LowPrioritydueDate.LowDueDate==""?<> 
     <div className='px-6 py-6'>
     <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">Please Select a Due Date for the Tasks Having Priority as Very High.</div> 
     </div>
     </>
     :<>

     <div class='px-6 py-6'>
      <p style={{textAlign:"center",marginBottom:"12px",
        marginTop:"12px",marginLeft:"2px"}}
        
        class='text-2xl'> Due Date: {
         LowPrioritydueDate.LowDueDate
        } 
        </p>
      </div>

     </>}


      <p class='text-center text-2xl' style={{marginBottom:"30px"}}>Task Priority Stats <FontAwesomeIcon icon={faCircleInfo} style={{"--fa-primary-color": "#f9f5f5", "--fa-secondary-color": "#26c555", "--fa-secondary-opacity": "0.9",marginLeft:"10px"}} /> </p>












     <div class=" w-1/2 mx-auto grid md:grid-cols-3 gap-10">
  
     {/* <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <div class="px-6 py-4"> */}
    <div class="font-bold text-xl mb-2 bg-slate-700	 text-white">
      <div class='px-5 py-5'>
        High Priority Tasks Date Stats 
        <FontAwesomeIcon icon={faCircleInfo} style={{"--fa-primary-color": "#f9f5f5", "--fa-secondary-color": "#26c555", "--fa-secondary-opacity": "0.9",marginLeft:"10px"}} />
         <br/>
         <br/>

         Present Date:  {
          highPrioritydueDate.currDate
         }
         <br/>
         <br/>
         Due Date:
         {highPrioritydueDate.DueDate}

      </div>
    </div>
    <div class="font-bold text-xl mb-2 bg-slate-700	 text-white">
    <div class="font-bold text-xl mb-2">
    <div class='px-5 py-5'>
        Very High Priority Tasks Date Stats 
        <FontAwesomeIcon icon={faCircleInfo} style={{"--fa-primary-color": "#f9f5f5", "--fa-secondary-color": "#26c555", "--fa-secondary-opacity": "0.9",marginLeft:"10px"}} />
         <br/>
         <br/>

         Present Date:  {
          VeryhighPrioritydueDate.currDate
         }
         <br/>
         <br/>
         Due Date:
         {
          VeryhighPrioritydueDate.VeryHighDueDate
         }

      </div></div>
     </div>

     <div class="font-bold text-xl mb-2 bg-slate-700	 text-white">
    <div class="font-bold text-xl mb-2">
    <div class='px-5 py-5'>
        Low Priority Tasks Date Stats 
        <FontAwesomeIcon icon={faCircleInfo} style={{"--fa-primary-color": "#f9f5f5", "--fa-secondary-color": "#26c555", "--fa-secondary-opacity": "0.9",marginLeft:"10px"}} />
         <br/>
         <br/>

         Present Date:  {
          LowPrioritydueDate.currDate
         }
         <br/>
         <br/>
         Due Date:
         {LowPrioritydueDate.LowDueDate}

      </div>
    </div>
    </div>
  </div>
  

    

{/* <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  
</div> */}
   
      </React.Fragment>
    );
  
}

export default TasksAnalytics;
