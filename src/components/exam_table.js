import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import { IoMdPersonAdd } from "react-icons/io";
import { BsClipboardData } from "react-icons/bs";
import { AiOutlineSchedule, AiFillCloseCircle } from "react-icons/ai";
import avater from "../cover.jpg";
import { BiBorderRadius, BiDetail } from "react-icons/bi";
import Exam from "./Exams/Exam";
import { NavLink } from "react-router-dom";
import { Tooltip, Link, Button, Tag } from "carbon-components-react";
import { Add24 } from "@carbon/icons-react";
import { isMobile } from "react-device-detect";

function Exams() {
  const theme = useSelector((state) => state.theme.value);
  const [IsExam, setIsExam] = useState(false);
  const [ExamDetail, setExamDetail] = useState(false);
  const examdetail = (exam) => {
    setExamDetail(exam);
    setIsExam(true);
  };

  const [data, setdata] = useState([
    {
      Term: "1st Term",
      Date: "02-05-2021",
    },
    {
      Term: "2nd Term",
      Date: "02-03-2021",
    },
    {
      Term: "final Term",
      Date: "02-06-2021",
    },
  ]);

  return (
    <>
      <div
        className={
          theme ? "card students-chart-card-dark " : "card students-chart-card "
        }
      >
        <div className="card-header bg-primary text-light">
          {isMobile && (
            <Button
              kind="secondary"
              style={{
                width: "100%",
                marginBottom: ".5rem",
                borderRadius: "5px",
              }}
              renderIcon={Add24}
            >
              Add New Exam
            </Button>
          )}
          <form>
            <div className="input-group shadow">
              <select
                className={`form-control shadow-none ${
                  theme && "bg-dark text-light"
                }`}
                aria-label="Default select example"
              >
                <option selected>2021</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <select
                className={`form-control shadow-none ${
                  theme && "bg-dark text-light"
                }`}
                aria-label="Default select example"
              >
                <option selected>Pending</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              {!isMobile && (
                <Button
                  kind="secondary"
                  renderIcon={Add24}
                  style={{
                    borderRadius: "0 5px 5px 0",
                    border: "1px solid #fff",
                  }}
                >
                  Add New Exam
                </Button>
              )}
            </div>
          </form>
        </div>
        <div className="card-content p-2">
          <div className={`bx--grid exam-row  ${theme && "bg-dark"}`}>
            <div>
              <h4 className={!theme ? " text-dark" : " text-light"}>Term</h4>
            </div>
            <h4>Date</h4>
            <h4>Details</h4>
          </div>

          {data.map((data, index) => (
            <div className={`bx--grid exam-row  ${theme && "bg-dark"}`}>
              <div>
                <NavLink
                  className={
                    !theme ? "navLink text-dark exam-row-term" : "exam-row-term navLink text-light"
                  }
                  to={`exam/${index + 1}`}
                >
                  {data.Term} <br />{" "}
                </NavLink>
              </div>
              <p >{data.Date}</p>
              {/* <div>
                {" "}
                5th to 8th
                <Tooltip direction="bottom" tabIndex={0}>
                  <Tag type="red" title="Filter">
                    {" "}
                    5th{" "}
                  </Tag>
                  <Tag type="magenta" title="Clear Filter">
                    {" "}
                    6th{" "}
                  </Tag>
                  <Tag type="purple" title="Clear Filter">
                    {" "}
                    7th{" "}
                  </Tag>
                  <Tag type="purple" title="Clear Filter">
                    {" "}
                    8th{" "}
                  </Tag>

                  <div className="bx--tooltip__footer">
                    <Button size="small">Create</Button>
                  </div>
                </Tooltip>
              </div> */}
              <div>
                <button
                  className={`btn-icon float-end btn-info m-1  bordered   shadow`}
                  onClick={() => examdetail(data)}
                  data-toggle="popover"
                  aria-label="Details"
                  data-cooltipz-dir="bottom"
                >
                  {" "}
                  <BiDetail />
                </button>
              </div>
            </div>
          ))}
        </div>

        <Exam show={IsExam} exam={ExamDetail} onHide={() => setIsExam(false)} />
      </div>
    </>
  );
}

export default Exams;
