import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Students from "../components/students_table";
import Staff from "../components/staff_table";
import Students_chart from "../components/students_chart";
import Students_pie from "../components/students_pie";
import Sparkboxes from "../components/sparkbox";
import Exams from "../components/exam_table";
import { currentTitle } from "../store/title";
import Classes from "../components/classes";
import { ChevronDown16, ChevronUp16 } from "@carbon/icons-react";
import { isMobile } from "react-device-detect";

function Dashboard() {
  const theme = useSelector((state) => state.theme.value);
  const [IsStates, setIsStates] = useState(isMobile ? false : true);
  const [IsChart, setIsChart] = useState(isMobile ? false : true);
  const [IsStudents, setIsStudents] = useState(isMobile ? false : true);
  const [IsPie, setIsPie] = useState(isMobile ? false : true);
  const [IsStaff, setIsStaff] = useState(isMobile ? false : true);
  const [IsExam, setIsExam] = useState(isMobile ? false : true);
  const [IsClasses, setIsClasses] = useState(isMobile ? false : true);


  const dispatch = useDispatch();
  useEffect(() => {
    // Update the document title using the browser API
    dispatch(currentTitle("Dashboard"));
  }, []);
  console.log(isMobile);
  return (
    <>
      <div className={!theme ? "page-content " : "page-content-dark"}>
        <>
          <div className="content-drop">
            <div
              className={`content-header ${theme && "light"}`}
              onClick={() => setIsStates(!IsStates)}
            >
              <div>
                <p>States </p>
              </div>
              <div>{!IsStates ? <ChevronDown16 /> : <ChevronUp16 />}</div>
            </div>
            {IsStates && (
              <div className="content-body">
                <Sparkboxes />
              </div>
            )}
          </div>

          <div className="content-drop">
            <div
              className={`content-header ${theme && "light"}`}
              onClick={() => setIsChart(!IsChart)}
            >
              <div>
                <p>Students Chart </p>
              </div>
              <div>{!IsChart ? <ChevronDown16 /> : <ChevronUp16 />}</div>
            </div>
            {IsChart && (
              <div className="content-body pb-3">
                <Students_chart />
              </div>
            )}
          </div>

          <div className="row ">
            <div className="col-md-9">
              <div className="content-drop">
                <div
                  className={`content-header ${theme && "light"}`}
                  onClick={() => setIsStudents(!IsStudents)}
                >
                  <div className="S-t-m">
                    <p>Students </p>
                  </div>
                  <div>{!IsStudents ? <ChevronDown16 /> : <ChevronUp16 />}</div>
                </div>
                {IsStudents && (
                  <div className="content-body mb-5">
                    <Students />
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-3">
              <div className="content-drop">
                <div
                  className={`content-header ${theme && "light"}`}
                  onClick={() => setIsPie(!IsPie)}
                >
                  <div>
                    <p>
                      Students in This Session{" "}
                      <small className="value-ref">(2021)</small>{" "}
                    </p>
                  </div>
                  <div>{!IsPie ? <ChevronDown16 /> : <ChevronUp16 />}</div>
                </div>
                {IsPie && (
                  <div className="content-body">
                    <Students_pie />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-6">
            <div className="content-drop">
                <div
                  className={`content-header ${theme && "light"}`}
                  onClick={() => setIsStaff(!IsStaff)}
                >
                  <div>
                  <p  style={{ margin: 0 }}>Staff <small>(current Staff)</small></p>
                  </div>
                  <div>{!IsStaff ? <ChevronDown16 /> : <ChevronUp16 />}</div>
                </div>
                {IsStaff && (
                  <div className="content-body mb-5">
                    <Staff />
                  </div>
                )}
              </div>
              
            </div>
            <div className="col-md-6">
            <div className="content-drop">
                <div
                  className={`content-header ${theme && "light"}`}
                  onClick={() => setIsExam(!IsExam)}
                >
                  <div>
                  <p  style={{ margin: 0 }}>Exams</p>
                  </div>
                  <div>{!IsExam ? <ChevronDown16 /> : <ChevronUp16 />}</div>
                </div>
                {IsExam && (
                  <div className="content-body mb-5">
                    <Exams />
                  </div>
                )}
              </div>
              
            </div>
          </div>
          <div className="content-drop">
                <div
                  className={`content-header ${theme && "light"}`}
                  onClick={() => setIsClasses(!IsClasses)}
                >
                  <div>
                  <p  style={{ margin: 0 }}>Classes</p>
                  </div>
                  <div>{!IsClasses ? <ChevronDown16 /> : <ChevronUp16 />}</div>
                </div>
                {IsClasses && (
                  <div className="content-body mb-5">
                    <Classes />
                  </div>
                )}
              </div>
          
        </>
      </div>
    </>
  );
}

export default Dashboard;
