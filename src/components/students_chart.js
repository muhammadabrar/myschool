import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Chart from "react-apexcharts";

function Students_chart() {
    const theme = useSelector((state) => state.theme.value)
   
    const data = {

        series: [{
          name: 'Session: 2018',
          data: [31, 40, 28, 51, 42, 109, 100]
        }, {
          name: 'Session: 2019',
          data: [11, 32, 66, 32, 34, 52, 41]
        }, {
          name: 'Session: 2020',
          data: [55, 24, 44, 41, 25, 66, 55]
        }, {
          name: 'Session: 2021',
          data: [11, 32, 45, 32, 48, 70, 50]
        }, {
          name: 'Session: 2022',
          data: [11, 32, 45, 32, 30, 40, 90]
        }],
        title: {
            text: 'Media',
            align: 'left',
            offsetY: 25,
            offsetX: 20
          },
        options: {
          chart: {
            foreColor: `${theme? "#fff": "#000"}`,
            height: 350,
            type: 'line',
            
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: true,
    
          },
          stroke: {
            curve: 'smooth'
          },
        //   fill: {
        //     type: "gradient",
        //     gradient: {
        //       shade: 'dark',
        //       shadeIntensity: 1,
        //       opacityFrom: 0.2,
        //       opacityTo: 0.5,
        //       stops: [0, 50, 100]
        //     }
        //   },
          xaxis: {
            categories: ['1st', '2nd', '3rd', '4th', '5th', '6th']
          },
          tooltip: {
          },
        },
    
    
      };
  return (<>
  <div className={theme? "card students-chart-card-dark ": "card students-chart-card "}>
    <div className="card-header">
        <>Students Per Session</>
    </div>
    <div className="card-content p-2">
    <Chart options={data.options} className="chart" series={data.series} type='line' height={350} />
    </div>
    
</div>
    
    
        </>
  );
}

export default Students_chart