import React,{useState,useEffect} from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,ArcElement,Tooltip,Legend,CategoryScale,LinearScale,PointElement,Title,TimeScale,LineElement
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

//regitering of Elements.
ChartJS.register(ArcElement,Tooltip,Legend,CategoryScale,LinearScale,PointElement,Title,TimeScale,LineElement);

//we were able to retrieve the Chart component.

//lets consider the retrieval of data using axios from our backend application.


const TaskVisualizer = () => {
 
  const [tasks,setAllTasks]=useState([]);
    //we are defining the Priority.
    
    
    
    const loadData= async ()=>
   {
   //let consider the usage of axios.
    const response=await axios.get('http://localhost:8080/v1/allTasks');
    //we are basically setting all the values over here.
    setAllTasks(response.data);
    // setVeryHighPriority(response.data);
    // setLowPriority(response.data);
    // setHighPriority(response.data);
   }
    let HighPriority=[];
    let VeryHighPriority=[];
    let LowPriority=[];
  
  
    useEffect(()=>
    {
      loadData();
     // setVeryHighPriority(tasks);
   
    },[]);
  
    
  
     //const [highPriority,setHighPriority]=useState([tasks]);
     //setHighPriority(tasks);
     /*const high=highPriority.filter((task)=>(
      task.taskPriority=="high"
     ));*/
  
     //maintain different array and perform filter+map over here.
     
    //  console.log(highPriority);
  
    //  const veryHigh=highPriority.filter((task)=>(
    //   task.taskPriority=="High"
    //  ));
  
    //  console.log(veryHigh);
  
  
  
    // const [veryhighPriority,setVeryHighPriority]=useState([tasks]);
  
    // const [lowPriority,setLowPriority]=useState([tasks]);
  
    //  Entries:
    // {
    //   highPriority.map((task)=>(
    //     <h1>{task.taskCategory}</h1>
    //   ))
    // }
  
    // //filtering based on the Task Category.
    // const filteredHighPriority=()=>
    // {
    //   setVeryHighPriority(
    //     highPriority.filter((task)=>task.Priority=="High")
    //   )
    // }
    // const filteredVeryHighPriority=()=>
    // {
    //   setVeryHighPriority(
    //     veryhighPriority.filter((task)=>task.Priority=="Very High")
    //   )
    // }
  
    // const filteredLowPriority=()=>
    // {
    //   setLowPriority(
    //     lowPriority.filter((task)=>task.Priority=="Low")
    //   )
    // }
  
  
    // tasks.filter((task)=>task.Priority=="Very High")
     
    // //filteredVeryHighPriority();
    //  const newDataset=[veryhighPriority.length,highPriority.length,lowPriority.length];
  
    //filteredHighPriority();
  
     //console.log(newDataset);
     tasks.filter((task=>task.taskPriority=="High")).map((
      data
    )=>
    (
       HighPriority.push(data.taskPriority)
      //console.log(task.taskPrio)
    ));
  
    tasks.filter((task=>task.taskPriority=="Very High")).map((
      data
    )=>
    (
       VeryHighPriority.push(data.taskPriority)
      //console.log(task.taskPrio)
    ));
  
    tasks.filter((task=>task.taskPriority=="Low")).map((
      data
    )=>
    (
       LowPriority.push(data.taskPriority)
      //console.log(task.taskPrio)
    ));
   //console.log(HighPriority);
   // const dataset=[HighPriority.length,];
  
  
  
    
  
  
      const chartdata = {
          labels: ['Very High Priority Tasks','High Priority Tasks','Low Priority Tasks'],
          datasets: [
            {
              label: 'Task Priority',
              data:[HighPriority.length,VeryHighPriority.length,LowPriority.length],
              backgroundColor: [
                'green','yellow','red'
              ],
              borderColor: [
                  'green','yellow','red'
              ],
              borderWidth: 1,
            },
          ],
        };
      
      return (
  
       
        <React.Fragment>
        <>
          {/* {high.length} */}
          <br/>
          {/* {
            tasks.filter((task=>task.taskCategory=="High")).map((
              data
            )=>
            (
              HighPriority.push(data.taskCategory)
            ))
          } */}
        </>
          <p class='text-2xl text-center mb-12 mt-10'>Tasks By Priority</p>
        <div 
        
        class="flex justify-center w-1/4 items-center mx-auto"
        >
      
               <Doughnut data={chartdata}
                />
     </div>
     <div  class="flex  w-2/4 justify-center items-center w-100 h-100 mx-auto mt-20">
  <Line
          data={chartdata}
          options={{
            responsive:true,

            plugins: {
              title: {
                display: true,
                text: "Line Graph for High/Very High/Low Priority."
              },
              legend: {
                display: false
              }
            }
          }}
        />
        </div>
      </React.Fragment>
      );
  
}

export default TaskVisualizer;
