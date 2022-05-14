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
const AttendanceChart = () => {
  const theme = useSelector((state) => state.theme.value);
  const { studentid } = useParams();


  const [IsAttendance, setIsAttendance] = useState(false);
  //chart 1
  var ChartData = {
    series: [95],
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
              return val + "%";
            },
          },
        },
      },
    },

    stroke: {
      backgroundColor: "#000",
      lineCap: "round",
    },
    labels: ["Present"],
  };
  return (
    <>
      <Chart
        options={ChartData}
        className="range-chart"
        series={ChartData.series}
        type="radialBar"
      />
      <p className={` ${theme && "text-light"}`}>Attendance</p>
      <div className="profile-actions  mt-2">
        <button className={`p-action ${theme && "text-light"}`}>
          <i className="p-a-icon">
            <CheckmarkOutline24 />
          </i>
          Present
        </button>
        <button
          className={`p-action ${theme && "text-light"}`}
          onClick={() => setIsAttendance(true)}
        >
          <i className="p-a-icon">
            <WarningSquare24 />
          </i>
          Detail
        </button>
        <button className={`p-action ${theme && "text-light"}`}>
          <i className="p-a-icon">
            <CloseOutline24 />
          </i>
          Absent
        </button>
      </div>
      <Attendance show={IsAttendance} onHide={() => setIsAttendance(false)} />
    </>
  );
};

export default AttendanceChart;
