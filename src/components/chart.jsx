import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

function chart(props) {
 
    const rowData = props.rows;
    const xvalue=Object.entries(rowData).map(([key, value])=>{
      // console.log(value.monthYear);
      return value.monthYear;
    })
    const yvalue=Object.entries(rowData).map(([key, value])=>{
      // console.log(value.average);
      return value.average;
    })
    // console.log(xvalue);
    // console.log(yvalue);

  function getGradient(chart) {
    const {ctx, chartArea: {top,bottom,left,right} }=chart;
    const gradient=ctx.createLinearGradient(0,top,0,bottom);
    gradient.addColorStop(0,'rgba(37, 205, 37, 0.40)');
    gradient.addColorStop(1,'rgba(37, 205, 37, 0.00)');
    return gradient;
  }
   

    
  return (
    <>
    <Line data={{
      labels: xvalue,
      datasets:[
        {
          label: "Profit percentage",
          data: yvalue,
          fill: true,
          borderDash: [3,3],
          pointRadius: 0,
          borderColor: 'rgba(37, 205, 37, 0.5)',
          backgroundColor: (context)=>{
            // console.log(context);
            const chart=context.chart;
            const {ctx, chartArea}=chart;
            if(!chartArea) return null;
            return getGradient(chart);
            
          }
          
        }
      ]
    }}/>
    </>
  )
}
export default chart
