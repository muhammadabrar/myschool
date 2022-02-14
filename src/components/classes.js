import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { GrAdd } from "react-icons/gr";
import { AiFillEdit, AiOutlineClose } from "react-icons/ai";
import { Button } from "carbon-components-react";
import { isMobile } from "react-device-detect";
import { Add24, Edit24, Close24 } from "@carbon/icons-react";
import Add_Class from "./classes/add";

function Classes() {
  const theme = useSelector((state) => state.theme.value);
 const [addClass, setaddClass] = useState(false);
  const dispatch = useDispatch();

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

  return (
    <>
      <div
        className={
          theme ? "card students-chart-card-dark " : "card students-chart-card "
        }
      >
        <div className="card-header bg-primary text-light">
          <div className="staff-Header">
            <>
              {isMobile && (
                <Button
                  kind="secondary"
                  size="field"
                  style={{
                    width: "100%",
                    marginBottom: ".5rem",
                    borderRadius: "5px",
                  }}
                  className="staff-btn"
                  renderIcon={Add24}
                  onClick={() => setaddClass(true)}
                >
                  Add Class
                </Button>
              )}

              {!isMobile && (
                <Button
                  kind="secondary"
                  size="field"
                  style={{
                    width: "10rem",
                    marginRight: ".5rem",
                    borderRadius: "5px",
                  }}
                  className="staff-btn"
                  renderIcon={Add24}
                  onClick={() => setaddClass(true)}

                >
                  Add Class
                </Button>
              )}
              <div>
                <div className="input-group shadow">
                  <span
                    className={`input-group-text  ${
                      theme && "bg-dark text-light"
                    }`}
                  >
                    Grade
                  </span>

                  <select
                    className={`form-control shadow-none ${
                      theme && "bg-dark text-light"
                    }`}
                    style={{ width: "12.2rem" }}
                  >
                    <option selected>5th</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </>
          </div>
        </div>
        <div className="card-content p-2">
          <div className="row">
          {row.map((data, index) => (
            <>
            <div className="col-md-3">
              <div
                className={`card mt-3 ${
                  !theme ? " shadow " : " text-light shadow bg-dark"
                }`}
              >
                <div className="card-body ">
                  <div className="c-info-box">
                    <p className="info-h">Grade</p>
                    <p className="text-muted info-v">5th</p>
                  </div>
                  <div className="c-info-box">
                    <p className="info-h">Subject</p>
                    <p className="text-muted info-v">Urdu </p>
                  </div>
                  <div className="c-info-box">
                    <p className="info-h">Teacher</p>
                    <p className="text-muted info-v">Muhammad Abrar </p>
                  </div>
                  <div className="c-info-box">
                    <p className="info-h">Time</p>
                    <p className="text-muted info-v">10:30 AM </p>
                  </div>
                  <div className="c-info-box-action">
                  <Button
                      kind="secondary"
                      size="sm"
                      renderIcon={Edit24}
                      className={`shadow `}
                    >
                      Edit Class
                    </Button>
                    <Button
                      kind="danger"
                      size="sm"
                      renderIcon={Close24}
                      className={`shadow float-end`}
                    >
                      Remover Class
                    </Button>
                   
                  </div>
                </div>
              </div>
            </div></>
          ))}
          </div>

          
        </div>
      </div>
      <Add_Class show={addClass} onHide={() => setaddClass(false)}/>
      <br />
    </>
  );
}

export default Classes;
