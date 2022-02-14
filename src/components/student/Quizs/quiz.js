import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

import Attendance from "../attendance";
import Chart from "react-apexcharts";
import {
  CheckmarkOutline24,
  WarningSquare24,
  CloseOutline24,
} from "@carbon/icons-react";
import { isMobile } from "react-device-detect";
const Quizs = () => {
  const theme = useSelector((state) => state.theme.value);
  const { studentid } = useParams();

 const total = 10;
 const obt = 9;
 const Percentage = (obt*100) / total;
  const [IsAttendance, setIsAttendance] = useState(false);
  //chart 1
  var ChartData = {
    series: [Percentage],
    chart: {
      // foreColor: `${theme ? "#fff" : "#000"}`,
      type: "radialBar",
      backgroundColor: "#000",
      // height: 600,
    },
    fill: {
      colors: "#28A745",
    },

    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "70%",
          background: "#293450",
        },
        track: {
          background: "#fff",
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15,
          },
        },
        dataLabels: {
          showOn: "always",
          name: {
            offsetY: -5,
            show: true,
            color: "#fff",
            fontSize: isMobile ? "10px" : "13px",
          },
          value: {
            color: "#fff",
            fontSize: isMobile ? "15px" : "18px",
            show: true,
            offsetY: isMobile ? 1 : 5,

            formatter: function (val) {
              return obt +"/"+ total;
            },
          },
        },
      },
    },

    stroke: {
      backgroundColor: "#000",
      lineCap: "round",
    },
    labels: ["Result"],
  };
  return (
    <>
    
      <Chart
        options={ChartData}
        className="range-chart"
        series={ChartData.series}
        type="radialBar"
      />
      <p className={` ${theme && "text-light"}`}>Quiz Title</p>
      <p className="text-sm text-muted"><small>Wednesday, February 9, 2022</small></p>
      <div className="s-actions  mt-2">
        <p className="text-info">5th | urdu</p>
      </div>
      <Attendance show={IsAttendance} onHide={() => setIsAttendance(false)} />
    </>
  );
};

export default Quizs;
