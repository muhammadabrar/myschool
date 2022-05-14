import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { Card,  Breadcrumb, Accordion } from "react-bootstrap";
import avater from "../cover.jpg";
import { currentTitle } from "../store/title";
import Cbreadcrumb from "../components/cbreadcrumb";
import { isMobile } from "react-device-detect";
import { ChevronDown16, ChevronUp16, Add16 } from "@carbon/icons-react";
import Select from "react-select";
import { Button } from "carbon-components-react";

function ExamDetail() {
  const { examid } = useParams();
  const [Isdropdown, setIsDropdown] = useState(false);
  const [data, setdata] = useState([
    {
      name: "Muhammad Abrar",
      rollNo: "21501",
      Father: "Israr Muhammad",
      contact1: "03405216890",
      contact2: "03405216890",
      grade: "5th",
      status: "Good",
      address: "moh: redawan, po: maini, swabi kpk pakistan",
    },
    {
      name: "Awais Rahman",
      rollNo: "21502",
      Father: "Saqib Khan",
      contact1: "03122565987",
      contact2: "03324565855",
      grade: "5th",
      address: "moh: redawan, po: maini, swabi kpk pakistan",
      status: "Good",
    },
    {
      rollNo: "21503",
      name: "Noman Khan",
      Father: "Ismail Khan",
      contact1: "03126564987",
      contact2: "032136547898",
      grade: "5th",
      address: "moh: redawan, po: maini, swabi kpk pakistan",
      status: "Good",
    },
    {
      rollNo: "21504",
      name: "Wajid khan",
      Father: "toseef Khan",
      contact1: "03124249987",
      contact2: "03124249987",
      grade: "5th",
      address: "moh: redawan, po: maini, swabi kpk pakistan",
      status: "Good",
    },
  ]);
  const [row, setrow] = useState(data);
  const [IsResult, setIsResult] = useState(isMobile ? false : true);
  const [IsdateShet, setIsdateShet] = useState(isMobile ? false : true);

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);
  useEffect(() => {
    // Update the document title using the browser API
    dispatch(currentTitle("Exam Details"));
  }, []);

  const options = [
    { value: "chocolate", label: "5th" },
    { value: "strawberry", label: "6th" },
    { value: "vanilla", label: "7th" },
  ];
  const customStyles = {
    border: "none",
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px solid #888',
      color: state.isSelected ? '#000' : '#888',
      padding: 20,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      //   border: "none"
      width: "10rem",
      display: "flex",
      background: "#F4F4F4",
      borderBottom: "1px solid #888",
      marginLeft:"1rem"
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };



  return (
    <>
      <div className={!theme ? "page-content " : "page-content-dark"}>
        <Cbreadcrumb goto="Exam" />
        <Card className={!theme ? "shadow " : " text-light shadow bg-dark"}>
          <Card.Body>
            <div className="row">
              {/* <div className="col-md-2 ">
              
            </div> */}

              <div className="col-md-5">
                <div className="info-item">
                  <p className="info-title">Term:</p>
                  <p className="info-value">Muhammad Abrar</p>
                </div>
                <div className="info-item">
                  <p className="info-title">Session:</p>
                  <p className="info-value">Muhammad Abrar</p>
                </div>
                <div className="info-item">
                  <p className="info-title">Date:</p>
                  <p className="info-value">MAle</p>
                </div>
                <div className="info-item">
                  <p className="info-title">Gardes:</p>
                  <p className="info-value">
                    <span
                      className="badge mx-1 rounded-pill"
                      style={{ background: "#EEDE04" }}
                    >
                      5th
                    </span>
                    <span
                      className="badge mx-1 rounded-pill"
                      style={{ background: "#EEDE04" }}
                    >
                      5th
                    </span>
                    <span
                      className="badge mx-1 rounded-pill"
                      style={{ background: "#EEDE04" }}
                    >
                      5th
                    </span>
                    <span
                      className="badge mx-1 rounded-pill"
                      style={{ background: "#EEDE04" }}
                    >
                      5th
                    </span>
                    <span
                      className="badge mx-1 rounded-pill"
                      style={{ background: "#EEDE04" }}
                    >
                      5th
                    </span>
                    <span
                      className="badge mx-1 rounded-pill"
                      style={{ background: "#EEDE04" }}
                    >
                      5th
                    </span>
                    <span
                      className="badge mx-1 rounded-pill"
                      style={{ background: "#EEDE04" }}
                    >
                      5th
                    </span>
                    <span
                      className="badge mx-1 rounded-pill"
                      style={{ background: "#EEDE04" }}
                    >
                      5th
                    </span>
                    <span
                      className="badge mx-1 rounded-pill"
                      style={{ background: "#EEDE04" }}
                    >
                      5th
                    </span>
                    <span
                      className="badge mx-1 rounded-pill"
                      style={{ background: "#EEDE04" }}
                    >
                      5th
                    </span>
                    <span
                      className="badge mx-1 rounded-pill"
                      style={{ background: "#EEDE04" }}
                    >
                      5th
                    </span>
                    <span
                      className="badge mx-1 rounded-pill"
                      style={{ background: "#EEDE04" }}
                    >
                      5th
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="info-item">
                  <p className="info-title px-2">Discription:</p>
                  <p className="info-value text-secondary">
                    Filler text is text that shares some characteristics of a
                    real written text, but is random or otherwise generated. It
                    may be used to display a sample of fonts, generate text for
                    testing, or to spoof an e-mail spam filter
                  </p>
                </div>
                <div className="info-item text-success">
                  <p className="info-title">Status:</p>
                  <p className="info-value">Available</p>
                </div>
              </div>
              <div className="col-md-3 text-end">
                <Button className="exam-btn">Close</Button>
                <br />
                <Button className="exam-btn">Done</Button>
                <br />
                <Button className="exam-btn">Delete</Button>
                <br />
                <Button className="exam-btn">Edit</Button>
                <br />
              </div>
            </div>
          </Card.Body>
        </Card>

        <div className="content-drop">
          <div
            className={`content-header ${theme && "light"}`}
            onClick={() => setIsResult(!IsResult)}
          >
            <div>
              <p>Results </p>
            </div>
            <div>{!IsResult ? <ChevronDown16 /> : <ChevronUp16 />}</div>
          </div>
          {IsResult && (
            <div className="content-body">
              <div
                className={
                  theme
                    ? "card students-chart-card-dark "
                    : "card students-chart-card "
                }
              >
                <div className="card-header bg-primary ">
                  <div className="result-header">
                  <p>Results of class 5th | Urdu</p>
                  <div  className="result-header-inputs">
                  <Select
                    className="Select-input "
                    styles={customStyles}
                    options={options}
                  />
                  <Select
                    className="Select-input"
                    styles={customStyles}
                    options={options}
                  />
                  </div>
                  </div>
                </div>
                <div className="card-content p-2">
                <div className="students-cards  fade-in-down p-2">
          
          {row.map((data, index) => (
            <div className={`student-card ${theme && "bg-dark"}`}>
              <NavLink to={`student/${index + 1}`}>
                <img src={avater} className="avater" alt="..." />
              </NavLink>

              <p className="name mt-3">
                <NavLink
                  className={
                    !theme ? "navLink text-dark" : "navLink text-light"
                  }
                  to={`student/${index + 1}`}
                >
                  {data.name}<br/>
                  
                </NavLink>
              </p>
              <small className="text-sm">{data.Father}</small>

              <p className="text-muted mt-3">{data.rollNo} ({data.grade})</p>
              <snap className="divider"></snap>
              <Button kind="primary" size="sm" renderIcon={Add16}>Add Marks</Button>

             
            </div>
          ))}
        </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ExamDetail;
