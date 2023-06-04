import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const DisplayAvaialbleTasks = () => {
  const [tasks,setAllTasks]=useState([]);
    const loadData= async ()=>
   {
   //let consider the usage of axios.
    const response=await axios.get('http://localhost:8080/v1/allTasks');
    //we are basically setting all the values over here.
    setAllTasks(response.data);
   }

    useEffect(()=>
    {
      loadData();
    },[]);

  return (
    <React.Fragment>
    <p style={{textAlign:"center",marginBottom:"12px",
        marginTop:"12px"}}
        
        class='text-2xl'>All Available Tasks <FontAwesomeIcon icon={faListCheck} 
    size='1xl'  style={{marginLeft:"5px"}}
/></p>
<div className='container mx-auto justify-center'>
       <div className='py-4'>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3" style={{fontSize:"15px"}}>
                    Task name
                </th>
                <th scope="col" class="px-6 py-3" style={{fontSize:"15px"}}>
                    Task Category
                </th>
                <th scope="col" class="px-6 py-3" style={{fontSize:"15px"}}>
                    Task Priority
                </th>
            </tr>
        </thead>
        <tbody>
        {
            tasks.map((task)=>
            (
                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {task.taskName}
                </th>
                <td class="px-6 py-4">
                   {task.taskCategory}
                </td>
                <td class="px-6 py-4">
                   {task.taskPriority}
                </td>
            </tr>
            ))
        }
            
            
        </tbody>
    </table>
</div>
</div>
</div>
    </React.Fragment>);
}

export default DisplayAvaialbleTasks;
