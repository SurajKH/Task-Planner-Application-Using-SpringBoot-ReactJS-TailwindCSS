import React,{useState} from 'react';
import axios from 'axios';

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
//   event.preventDefault();
//   return axios.post("http://localhost:8080/tasksapi/v1/addNewTask",newTask);
}
return(
 <React.Fragment>
 <div className='flex max-w-xl mx-auto justify-center border-b'>
        <div className='px-6 py-6'>
        <h4 className='items-center text-center mb-8'>New a New Task</h4>
    <form onSubmit={(e)=>onSubmit(e)}>
    <br/>

<label>Task Name</label>
<br/>

<input type="text" className="h-10 w-96 border mt-2 px-2 py-2"
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
<label>Task Category</label>
<br/>

<input type="text" className="h-10 w-96 border mt-2 px-2 py-2"
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

<label>Task Date</label>
<br/>

<input type="text" className="h-10 w-96 border mt-2 px-2 py-2"
placeholder="Enter the Task Date: " >

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
className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-12 width:50% mx-auto justify-center"
>Submit</button>
    </form>
    </div>
    </div>
 </React.Fragment>);
       
    }



export default AddNewTask;
