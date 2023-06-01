import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,ArcElement,Tooltip,Legend 
} from 'chart.js';

//regitering of Elements.
ChartJS.register(ArcElement,Tooltip,Legend);

//we were able to retrieve the Chart component.

const TaskVisualizer = () => {
 
    const chartdata = {
        labels: ['High','Intermediate','Low'],
        datasets: [
          {
            label: 'Task Priority',
            data: [120,100,20],
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
    
    return <Doughnut data={chartdata} />;
  
}

export default TaskVisualizer;
