import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaUserPlus } from "react-icons/fa";
import { BsFillCalendarCheckFill, BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function Sparkboxes() {
  const theme = useSelector((state) => state.theme.value);

  return (
    <>
      <div className="sparkboxes">
        <>
          <div className={`box ${theme ?  "text-light bg-dark" :"bg-light"}`}>
            <div className="box-body">
              <p className="box-title">Students</p>
              <h3 className="box-value">
                200
                <small className="value-ref">(present)</small>
              </h3>
            </div>

            <div className="box-footer">
              <p>Start Attendance</p>
              <Link to="/admission" className="btn-icon btn-warning shadow">
                <FaUserPlus />
              </Link>
            </div>
          </div>
        </>
        <>
          <div className={`box ${theme ?  "text-light bg-dark" :"bg-light"}`}>
            <div className="box-body">
              <p className="box-title">Students Attendance</p>
              <h3 className="box-value">
                200
                <small className="value-ref">(present)</small>
              </h3>
            </div>

            <div className="box-footer">
              <p>Start Attendance</p>
              <Link to="/admission" className="btn-icon btn-warning shadow">
                <BsFillCalendarCheckFill />
              </Link>
            </div>
          </div>
        </>
        <>
          <div className={`box ${theme ?  "text-light bg-dark" :"bg-light"}`}>
            <div className="box-body">
              <p className="box-title">Staff Attendance</p>
              <h3 className="box-value">
                20
                <small className="value-ref">(present)</small>
              </h3>
            </div>

            <div className="box-footer">
              <p>Start Attendance</p>
              <Link to="/admission" className="btn-icon btn-warning shadow">
                <BsFillCalendarCheckFill />
              </Link>
            </div>
          </div>
        </>
        <>
          <div className={`box ${theme ?  "text-light bg-dark" :"bg-light"}`}>
            <div className="box-body">
              <p className="box-title">Appointments & Meetings</p>
              <h3 className="box-value">
                200
                <small className="value-ref">(present)</small>
              </h3>
            </div>

            <div className="box-footer">
              <p>Details</p>
              <Link to="/admission" className="btn-icon btn-warning shadow">
                <BsArrowRight />
              </Link>
            </div>
          </div>
        </>
      </div>
    </>
  );
}

export default Sparkboxes;
