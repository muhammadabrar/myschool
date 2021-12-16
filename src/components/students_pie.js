import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import Chart from "react-apexcharts";
function Students_chart() {
  const theme = useSelector((state) => state.theme.value)

  var data = {
    series: [44, 55, 13, 43, 22, 44],
    chart: {
      foreColor: `${theme ? "#fff" : "#000"}`,
      type: 'pie',

    },
    fill: {
      colors: ['#FD0100', '#F76915', '#EEDE04', '#A0D636', '#2FA236', '#333ED4',]
    },
    labels: ['1st', '2nd', '3rd', '4th', '5th', '6th'],
    dataLabels: {
      enabled: false,

    },

    legend: {
      show: false,
      floating: false,
      position: 'bottom',
      offsetX: 0,
      offsetY: 0
    }
  };
  return (
    <>

      <div className={theme ? "card students-chart-card-dark " : "card students-chart-card  "}>
        <div className="card-header bg-primary text-light">

          Students in This Session <small className="value-ref">(2021)</small>

        </div>
        <div className="card-body">
          <Chart options={data} series={data.series} type='pie' />
          <ol className="list-group  list-group-numbered">
            <li className={`list-group-item  d-flex justify-content-between align-items-start ${theme && "bg-dark text-light"}`}>
              <div className="ms-2 me-auto">
                <div className="fw-bold">5th</div>

              </div>
              <span className="badge  rounded-pill" style={{ background: "#FD0100" }}>14</span>
            </li>
            <li className={`list-group-item  d-flex justify-content-between align-items-start ${theme && "bg-dark text-light"}`}>
              <div className="ms-2 me-auto">
                <div className="fw-bold">5th</div>

              </div>
              <span className="badge rounded-pill" style={{ background: "#F76915" }}>14</span>
            </li>
            <li className={`list-group-item  d-flex justify-content-between align-items-start ${theme && "bg-dark text-light"}`}>
              <div className="ms-2 me-auto">
                <div className="fw-bold">5th</div>

              </div>
              <span className="badge  rounded-pill" style={{ background: "#EEDE04" }}>14</span>
            </li>
            <li className={`list-group-item  d-flex justify-content-between align-items-start ${theme && "bg-dark text-light"}`}>
              <div className="ms-2 me-auto">
                <div className="fw-bold">5th</div>

              </div>
              <span className="badge  rounded-pill" style={{ background: "#A0D636" }}>14</span>
            </li>
            <li className={`list-group-item  d-flex justify-content-between align-items-start ${theme && "bg-dark text-light"}`}>
              <div className="ms-2 me-auto">
                <div className="fw-bold">5th</div>

              </div>
              <span className="badge  rounded-pill" style={{ background: "#2FA236" }}>14</span>
            </li>
            <li className={`list-group-item  d-flex justify-content-between align-items-start ${theme && "bg-dark text-light"}`}>
              <div className="ms-2 me-auto">
                <div className="fw-bold">5th</div>

              </div>
              <span className="badge  rounded-pill" style={{ background: "#333ED4" }}>14</span>
            </li>
          </ol>
        </div>



      </div></>
  );
}

export default Students_chart