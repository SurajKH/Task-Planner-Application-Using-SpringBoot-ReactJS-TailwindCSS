import React,{useState,useEffect} from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,ArcElement,Tooltip,Legend,CategoryScale,LinearScale,PointElement,Title,TimeScale,LineElement
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUserGroup } from '@fortawesome/free-solid-svg-icons';

//regitering of Elements.
ChartJS.register(ArcElement,Tooltip,Legend,CategoryScale,LinearScale,PointElement,Title,TimeScale,LineElement);


//Advanced Task Visualizer Component.

const AdvancedTasksVisualizer = () => {


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
let Professional=[];
let Upskilling=[];
let Personal=[];


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
 tasks.filter((task=>task.taskCategory=="Technology")).map((
  data
)=>
(
  Professional.push(data.taskCategory)
  //console.log(task.taskPrio)
));

tasks.filter((task=>task.taskCategory=="Personal")).map((
  data
)=>
(
   Personal.push(data.taskCategory)
  //console.log(task.taskPrio)
));

tasks.filter((task=>task.taskCategory=="Upskilling")).map((
  data
)=>
(
  Upskilling.push(data.taskCategory)
  //console.log(task.taskPrio)
));
//console.log(HighPriority);
// const dataset=[HighPriority.length,];






  const chartdata = {
      labels: ['Upskilling','Personal',
    'Professional'],
      datasets: [
        {
          label: 'Task By Category',
          data:[Professional.length,Personal.length,Upskilling.length],
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
      <p class='text-2xl text-center mb-12 mt-10'>Tasks By Category
      <FontAwesomeIcon
      icon={faUserGroup}
      size='xl'
      />
</p>
    <div 
    
    class="flex justify-center items-center w-80 h-80 mx-auto"
    >
  
           <Doughnut data={chartdata}
            />
 </div>
 <div  class="flex justify-center w-2/4 items-center w-150 h-150 mx-auto mt-20">
<Line
      data={chartdata}
      options={{
        responsive:true,
        plugins: {
          title: {
            display: true,
            text: "Line Graph for Analysing Tasks By Category."
          },
          legend: {
            display: true
          }
        }
      }}
    />
    </div>
  </React.Fragment>
  );
   
}

export default AdvancedTasksVisualizer;
