import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

import { currentTitle } from "../store/title";
import Attendance from "../components/student/charts/Attendance";
import Cbreadcrumb from "../components/cbreadcrumb";
import Fins from "../components/student/fins";

import cover from "../cover.jpg";
import {
  ChevronDown16,
  ChevronUp16,
  SubtractAlt24,
  Edit24,
  TrashCan24,
  Add24,
} from "@carbon/icons-react";
import { isMobile } from "react-device-detect";
import FeeY from "../components/student/charts/FeeYearly";
import FeeM from "../components/student/charts/FeeMonthly";
import AdmissionFee from "../components/student/charts/admissionFee";
import TotalPayment from "../components/student/charts/totalPayment";
import MounthlyQuiz from "../components/student/charts/MonthlyTest";
import ExamsChart from "../components/student/charts/Exam";
import FirstTerm from "../components/student/charts/firstterm";
import SecondTerm from "../components/student/charts/secterm";
import ThirdTerm from "../components/student/charts/ThirdTerm";
import { Tab, Tabs, Button, ContentSwitcher, Switch } from "carbon-components-react";
import Quizs from "../components/student/Quizs/quiz";
import Exam_chart from "../components/student/examresultchart";

function Student_profile() {
  const theme = useSelector((state) => state.theme.value);
  const { studentid } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    // Update the document title using the browser API
    dispatch(currentTitle("Student Profile"));
  }, []);
  const [Isdropdown, setIsDropdown] = useState(isMobile ? false : true);
  const [OpenTab, setOpenTab] = useState('today');




  //   dispatch(currentTitle("Student_profile"))
  return (
    <>
      <div className={!theme ? "page-content " : "page-content-dark"}>
        <Cbreadcrumb goto="Student / 2101" />

        <div className="row">
          <div className="col-md-3">
            <div
              className={`card profile-detail ${
                !theme ? " shadow " : " text-light shadow bg-dark"
              }`}
            >
              <div className="card-body ">
                <img src={cover} className="profile" />
                <p className="pt-1">Muhammad Abrar</p>
                <p className="text-muted">
                  <small>2101</small>
                </p>
                <p>
                  <span className="text-success">Available</span> | 5th
                </p>
                <div className="profile-actions  mt-2">
                  <button className={`p-action ${theme && "text-light"}`}>
                    <i className="p-a-icon">
                      <SubtractAlt24 />
                    </i>
                    With Drawal
                  </button>
                  <button className={`p-action ${theme && "text-light"}`}>
                    <i className="p-a-icon">
                      <Edit24 />
                    </i>
                    Edit
                  </button>
                  <button className={`p-action ${theme && "text-light"}`}>
                    <i className="p-a-icon">
                      <TrashCan24 />
                    </i>
                    Delete
                  </button>
                </div>
                {isMobile && (
                  <button
                    className="ghost-btn"
                    onClick={() => setIsDropdown(!Isdropdown)}
                  >
                    About More{" "}
                    {Isdropdown ? <ChevronUp16 /> : <ChevronDown16 />}
                  </button>
                )}
              </div>
            </div>

            {Isdropdown && (
              <>
                <div
                  className={`card mt-3 ${
                    !theme ? " shadow " : " text-light shadow bg-dark"
                  }`}
                >
                  <div className="card-body ">
                    <div className="info-box">
                      <p className="info-h">Father's Names</p>
                      <p className="text-muted info-v">Muhammad Abrar</p>
                    </div>
                    <div className="info-box">
                      <p className="info-h">Date of Birth</p>
                      <p className="text-muted info-v">March 02, 2000 </p>
                    </div>
                    <div className="info-box">
                      <p className="info-h">Gender</p>
                      <p className="text-muted info-v">Male </p>
                    </div>
                    <div className="info-box">
                      <p className="info-h">Domicile</p>
                      <p className="text-muted info-v">value </p>
                    </div>
                    <div className="info-box">
                      <p className="info-h">CNIC / Form-b</p>
                      <p className="text-muted info-v">16203-0402516-30 </p>
                    </div>
                    <div className="info-box">
                      <p className="info-h">Disable</p>
                      <p className="text-muted info-v">No </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`card mt-3 ${
                    !theme ? " shadow " : " text-light shadow bg-dark"
                  }`}
                >
                  <div className="card-body ">
                    <div className="info-box">
                      <p className="info-h">contacts</p>
                      <p className="text-muted info-v">03405216890 </p>
                      <p className="text-muted info-v">03405216890 </p>
                    </div>
                    <div className="info-box">
                      <p className="info-h">Permanent Address </p>
                      <p className="text-muted info-v">
                        moh: redawan, po: maini, swabi kpk pakistan{" "}
                      </p>
                    </div>
                    <div className="info-box">
                      <p className="info-h">Current Address</p>
                      <p className="text-muted info-v">
                        moh: redawan, po: maini, swabi kpk pakistan{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`card mt-3 ${
                    !theme ? " shadow " : " text-light shadow bg-dark"
                  }`}
                >
                  <div className="card-body ">
                    <div className="info-box">
                      <p className="info-h">Other Info</p>
                      <p className="info-h">Father's Occupation</p>
                      <p className="text-muted info-v">Doctor </p>
                    </div>
                    <div className="info-box">
                      <p className="info-h">Father's CNIC</p>
                      <p className="text-muted info-v">16203-0402516-3 </p>
                    </div>
                    <div className="info-box">
                      <p className="info-h">Father's Contact</p>
                      <p className="text-muted info-v">03405216890 </p>
                    </div>
                    <div className="info-box">
                      <p className="info-h">Residence</p>
                      <p className="text-muted info-v">N/A </p>
                    </div>
                    <div className="info-box">
                      <p className="info-h">Caat Tribe</p>
                      <p className="text-muted info-v">N/A </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="col-md-9">
            <h3 className={`heading ${theme && "text-light"}`}>States</h3>
            <div className="std-states">
              <div className="std-state">
                <Attendance />
              </div>
              <div className="std-state">
                <FeeY />
              </div>
              <div className="std-state">
                <FeeM />
              </div>
              <div className="std-state">
                <AdmissionFee />
              </div>
              <div className="std-state">
                <TotalPayment />
              </div>
              <div className="std-state">
                <MounthlyQuiz />
              </div>
              <div className="std-state">
                <ExamsChart />
              </div>

              <div className="std-state">
                <FirstTerm />
              </div>
              <div className="std-state">
                <SecondTerm />
              </div>
              <div className="std-state">
                <ThirdTerm />
              </div>
            </div>

            <div className="card  tabs mt-5">



<>
              <Tabs style={{width: "100%"}}>
                <Tab id="tab-1" className="tab text-light" label="Quiz">
                  <div className={`card-body tab-body ${theme && "bg-dark"}`}>
                    <div className="std-states">
                  <div className="std-state">
                      <Quizs />
                  </div>
                  <div className="std-state">
                      <Quizs />
                  </div>
                  <div className="std-state">
                      <Quizs />
                  </div>
                  <div className="std-state">
                      <Quizs />
                  </div>
                  <div className="std-state">
                      <Quizs />
                  </div>
                  <div className="std-state">
                      <Quizs />
                  </div>
                  <div className="std-state">
                      <Quizs />
                  </div>
                  <div className="std-state">
                      <Quizs />
                  </div>
                  <div className="std-state">
                      <Quizs />
                  </div>
                  <div className="std-state">
                      <Quizs />
                  </div>
                  </div>
                  </div>
                </Tab>

                <Tab href="#" id="tab-2" className="tab"  label="Exam">
                  <div className="some-content card-body  bg-dark">
                    {/* <select className="select bg-dark text-light">
                        <option selected>Select Exam</option>
                        <option>1st Term</option>
                        <option>2nd Term</option>
                        <option>3rd Term</option>

                    </select> */}
                    <select
                    className={` select shadow-none ${
                      theme && "bg-dark text-light"
                    }`}
                  >
                    <option selected>Session</option>
                    <option value="1">2021</option>
                    <option value="2">2021</option>
            </select>
            <Exam_chart />
                  </div>
                </Tab>
                <Tab href="#" id="tab-3" className="tab" label="Fee">
                  <div className="some-content card-body  bg-dark">
                    Content for third tab goes here.
                  </div>
                </Tab>
                <Tab href="#" id="tab-3"  label="Complaints">
                  <div className="some-content card-body  bg-dark">
                    <Button kind="secondary" size="sm" renderIcon={Add24} className="mb-4" >Add New Complaint</Button>
                  <Fins/>
                  </div>
                </Tab>
              </Tabs>
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Student_profile;
