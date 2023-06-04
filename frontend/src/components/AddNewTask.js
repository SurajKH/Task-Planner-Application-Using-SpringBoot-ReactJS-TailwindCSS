import React,{useState} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkSquare } from '@fortawesome/free-solid-svg-icons';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';

// import {FcHighPriority} from '@react-icons/all-files/fc/FcHighPriority';

// import {FcHighPriority} from '@fortawesome/free-solid-svg-icons';

import { faCircleExclamation,faUserGroup } from '@fortawesome/free-solid-svg-icons';

// import {MdPermContactCalendar} from '@react-icons/all-files/md/MdPermContactCalendar';

// import {faAlbumCollectionCirclePlus} from '@fortawesome/free-solid-svg-icons';

import {BiCalendar} from '@react-icons/all-files/bi/BiCalendar';

import {faAddressCard,faListCheck}
from '@fortawesome/free-solid-svg-icons';
import DisplayTasks from './DisplayTasks';


const AddNewTask=()=>
{
    //lets set the task.
const [newTask,setnewTask]=useState({
    taskName:"",
    taskCategory:"",
    taskDate:"",
    taskPriority:""
});
//now lets define the onSubmit Functionality.

const onSubmit=(event)=>
{
   event.preventDefault();
  
   console.log("Data Submitted successfully");
  return axios.post("http://localhost:8080/v1/addNewTask",newTask);
}
return(
 <React.Fragment>
 <div className='flex max-w-xl mx-auto justify-center border-b'>
        <div className='px-6 py-6'>
        <h4 className='items-center text-center text-lg'>Add a New Task  <FontAwesomeIcon icon={faLayerGroup}
        size='xl'
         />
        <span class='mr-5'></span>
        
        </h4>
    <form onSubmit={(e)=>onSubmit(e)}>
    <br/>

    

<label class='text-lg'>Task Name 
<FontAwesomeIcon icon={faListCheck} 
    size='xl'  style={{marginLeft:"5px"}}
/>
</label>
<br/>

<input 
type="text" 
className="h-10 w-96 border mt-2 px-2 py-2"
name="taskName"
value={newTask.taskName}
onChange={(e)=>
{
  e.preventDefault();
  const value=e.target.value;
  setnewTask({
    ...newTask,
    [e.target.name]:value
  });
  console.log("Task Name: ",value)
}}
placeholder="Enter the Task Name" >

</input>
{/* <input
        type="text"
        name="productName"
        value={product.productName}
        onChange={(e) => handleChange(e)}
        className="h-10 w-96 border mt-2 px-2 py-2" ></input> */}
        <br/>

{/* <input 
type="text"
name="taskName"
value={newproduct.productName}
onChange={(e)=>{
e.preventDefault();
const value = e.target.value;
setProduct({...newproduct, [e.target.name]: value });
console.log(newproduct);
}}
// onChange={(e) => handleChange(e)}
className="h-10 w-96 border mt-2 px-2 py-2"
>

</input> */}
<br/>
<label class='text-lg'>Task Category 
<FontAwesomeIcon
 size='xl'
 icon={faUserGroup} 

/>
{/* <FontAwesomeIcon size="1xl" icon={faAddressCard} /> */}
</label>
<br/>

<input 
type="text" 
className="h-10 w-96 border mt-2 px-2 py-2"
name="taskCategory"
value={newTask.taskCategory}
onChange={(event)=>
{
    event.preventDefault();
    const currValue=event.target.value;
    setnewTask({
        ...newTask,
        [event.target.name]:currValue
    });
}}
placeholder="Enter the Task Category" >

</input>
<br/>

{/* <input 
type="text"
name="productCategory"
value={newproduct.productCategory}
onChange={(e)=>{
e.preventDefault();
const value = e.target.value;
setProduct({...newproduct, [e.target.name]: value });
console.log(newproduct);
}}
// onChange={(e) => handleChange(e)}
className="h-10 w-96 border mt-2 px-2 py-2"
>

</input> */}
<br/>

{/* <label>Task Date <span><BiCalendar/></span></label>
<br/>

<input
type="text" 
name="taskDate"
value={newTask.taskDate}
className="h-10 w-96 border mt-2 px-2 py-2"
onChange={(event)=>
{
    event.preventDefault();
    const value=event.target.value;
    setnewTask({
        ...newTask,
        [event.target.name]:value
    });
    console.log(value);
}}
placeholder="Enter the Task Date"
>

</input>

<br/> */}
<br/>
<label class='text-lg'>Task Priority<span>
    {/* <FcHighPriority/> */}
    <FontAwesomeIcon icon={faCircleExclamation} size='xl'  style={{marginLeft:"5px"}}/>
</span>

</label>
<br/>
<input 
type="text" 
name="taskPriority"
value={newTask.taskPriority}
className="h-10 w-96 border mt-2 px-2 py-2"
onChange={(event)=>
{
    event.preventDefault();
    const value=event.target.value;
    setnewTask({
        ...newTask,
        [event.target.name]:value
    });
    console.log(value);
}}
placeholder="Enter the Task Priority " >

</input>
{/* <input 
type="text"
name="productCountry"
value={newproduct.productCountry}
onChange={(e)=>{
e.preventDefault();
const value = e.target.value;
setProduct({...newproduct, [e.target.name]: value });
console.log(newproduct);
}}
// onChange={(e) => handleChange(e)}
className="h-10 w-96 border mt-2 px-2 py-2"
>

</input> */}

{/* <br/>

<label>Product Company</label>

<br/> */}

{/* <input 
type="text"
name="productCompany"
value={newproduct.productCompany}
onChange={(e)=>{
e.preventDefault();
const value = e.target.value;
setProduct({...newproduct, [e.target.name]: value });
console.log(newproduct);
}}
// onChange={(e) => handleChange(e)}
className="h-10 w-96 border mt-2 px-2 py-2"
>

</input> */}
<br/>

<button  
type={"submit"}
onClick={(e)=>
        {
           console.log(newTask);
        }}
className="text-white-700 bg-teal-500 mr-12  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-12 width:50% mx-auto justify-center"
>Submit</button>
<span>
{/* <button 
class='flex'
onClick={()=>
{
    setnewTask({
        taskName:"",
    taskCategory:"",
    taskDate:"",
    taskPriority:""
    });
}}
className="text-white-700 bg-red-400  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-12 width:50% mx-auto justify-center"
>
     Clear Data
</button>  */}
</span>
    </form>
    </div>
    </div>
      
     
    {/* {newTask.length>0?<>

    <p>All Tasks.</p>

    </>:<>
        <p class='text-2xl text-center mt-12'>No Tasks Available.  <FontAwesomeIcon size='1-xl' icon={faXmarkSquare} /></p>

        <div class="bg-red-100 border-t-4 border-red-500 rounded-b text-black-700 px-4 py-3 shadow-md" role="alert">
  <div class="flex w-1/2 mx-auto">
    <div class="py-1 px-12"><svg class="fill-current h-6 w-6 text-red-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
    <div>
      <p class="font-bold">Important Note:</p>
      <p class="text-sm">There is no Tasks Available,Please Add a Task according to your Specifications.</p>
    </div>
  </div>
</div>
    </>} */}
    <DisplayTasks/>
 </React.Fragment>);
       
    }



export default AddNewTask;
