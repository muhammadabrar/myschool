import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Chart from "react-apexcharts";

function Exam_chart() {
    const theme = useSelector((state) => state.theme.value)
   
    const data = {

        series: [{
          name: '1st Term | 2021',
          data: [31, 40, 28, 51, 42, 95, ]
        }, {
          name: '2nd Term: 2021',
          data: [11, 32, 66, 32, 34, 52, ]
        }, {
          name: '3rd Term: 2021',
          data: [55, 24, 44, 41, 25, 66, ]
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
            categories: ['english', 'urdu', 'maths', 'science', 'pak study', 'islamyat']
          },
          tooltip: {
          },
        },
    
    
      };
  return (<>
  {/* <div className={theme? "card students-chart-card-dark ": "card students-chart-card "}>
    
    <div className="card-content p-2">
    </div>
    
</div> */}
<Chart options={data.options} className="chart" series={data.series} type='line' height={350} />
    
    
        </>
  );
}

export default Exam_chart