import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

import Salary from "./salary";
import Chart from "react-apexcharts";
import {
  CheckmarkOutline24,
  WarningSquare24,
  CloseOutline24,
} from "@carbon/icons-react";
import { isMobile } from "react-device-detect";
const SalaryChart = () => {
  const theme = useSelector((state) => state.theme.value);
  const { studentid } = useParams();


  const [IsSalary, setIsSalary] = useState(false);
  //chart 1
  var ChartData = {
    series: [10000],
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
              return "Rs. " +val;
            },
          },
        },
      },
    },

    stroke: {
      backgroundColor: "#000",
      lineCap: "round",
    },
    labels: ["Paid"],
  };
  return (
    <>
      <Chart
        options={ChartData}
        className="range-chart"
        series={ChartData.series}
        type="radialBar"
      />
      <p className={` ${theme && "text-light"}`}>Salary</p>
      <div className="profile-actions  mt-2">
        <button className={`p-action ${theme && "text-light"}`}>
          <i className="p-a-icon">
            <CheckmarkOutline24 />
          </i>
          Pay
        </button>
        <button
          className={`p-action ${theme && "text-light"}`}
          onClick={() => setIsSalary(true)}
        >
          <i className="p-a-icon">
            <WarningSquare24 />
          </i>
          Detail
        </button>
      </div>
      <Salary show={IsSalary} onHide={() => setIsSalary(false)} />
    </>
  );
};

export default SalaryChart;
