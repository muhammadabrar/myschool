import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom';
import { Card, Button, Breadcrumb, Accordion } from 'react-bootstrap'
import avater from '../cover.jpg';
import { currentTitle } from '../store/title'
import { AiOutlineMenu, AiFillEdit, AiOutlineUserDelete, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import { BiDetail } from 'react-icons/bi';
import { GrAdd } from 'react-icons/gr'
import Cbreadcrumb from '../components/cbreadcrumb';

function ExamDetail() {
  const { examid } = useParams()
  const [Isdropdown, setIsDropdown] = useState(false)
  const [data, setdata] = useState([
    {
      "name": "Muhammad Abrar",
      "rollNo": "21501",
      "Father": "Israr Muhammad",
      "contact1": '03405216890',
      "contact2": '03405216890',
      "grade": '5th',
      "status": "Good",
      "address": "moh: redawan, po: maini, swabi kpk pakistan"
    },
    {
      "name": "Awais Rahman",
      "rollNo": "21502",
      "Father": "Saqib Khan",
      "contact1": '03122565987',
      "contact2": '03324565855',
      "grade": '5th',
      "address": "moh: redawan, po: maini, swabi kpk pakistan",
      "status": "Good"
    },
    {
      "rollNo": "21503",
      "name": "Noman Khan",
      "Father": "Ismail Khan",
      "contact1": '03126564987',
      "contact2": '032136547898',
      "grade": '5th',
      "address": "moh: redawan, po: maini, swabi kpk pakistan",
      "status": "Good"
    },
    {
      "rollNo": "21504",
      "name": "Wajid khan",
      "Father": "toseef Khan",
      "contact1": '03124249987',
      "contact2": '03124249987',
      "grade": '5th',
      "address": "moh: redawan, po: maini, swabi kpk pakistan",
      "status": "Good"
    }
  ])
  const [row, setrow] = useState(data)


  const dispatch = useDispatch()
  const theme = useSelector((state) => state.theme.value)
  useEffect(() => {
    // Update the document title using the browser API
    dispatch(currentTitle("Exam Details"))
  }, []);
  return (<>
    <div className={!theme ? "page-content " : "page-content-dark"}>
    <Cbreadcrumb goto="Exam" />
      <Card className={!theme ? "shadow " : " text-light shadow bg-dark"}>
        <Card.Body >
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
                  <span className="badge mx-1 rounded-pill" style={{ background: "#EEDE04" }}>5th</span> 
                  <span className="badge mx-1 rounded-pill" style={{ background: "#EEDE04" }}>5th</span> 
                  <span className="badge mx-1 rounded-pill" style={{ background: "#EEDE04" }}>5th</span> 
                  <span className="badge mx-1 rounded-pill" style={{ background: "#EEDE04" }}>5th</span> 
                  <span className="badge mx-1 rounded-pill" style={{ background: "#EEDE04" }}>5th</span> 
                  <span className="badge mx-1 rounded-pill" style={{ background: "#EEDE04" }}>5th</span> 
                  <span className="badge mx-1 rounded-pill" style={{ background: "#EEDE04" }}>5th</span> 
                  <span className="badge mx-1 rounded-pill" style={{ background: "#EEDE04" }}>5th</span> 
                  <span className="badge mx-1 rounded-pill" style={{ background: "#EEDE04" }}>5th</span> 
                  <span className="badge mx-1 rounded-pill" style={{ background: "#EEDE04" }}>5th</span> 
                  <span className="badge mx-1 rounded-pill" style={{ background: "#EEDE04" }}>5th</span> 
                  <span className="badge mx-1 rounded-pill" style={{ background: "#EEDE04" }}>5th</span> 
                </p>
              </div>
              
            </div>
            <div className="col-md-4">
              <div className="info-item">
                <p className="info-title px-2">Discription:</p>
                <p className="info-value text-secondary">Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter</p>

              </div>
              <div className="info-item text-success">
                <p className="info-title">Status:</p>
                <p className="info-value">Available</p>
              </div>
            </div>
            <div className="col-md-3 text-end">

            <Button className="exam-btn" >Close</Button><br/>
            <Button  className="exam-btn" >Done</Button><br/>
            <Button  className="exam-btn" >Delete</Button><br/>
                <Button  className="exam-btn" >Edit</Button><br/>
              </div>

          </div>
        </Card.Body>
      </Card>






      <div className={theme ? "card students-chart-card-dark " : "card students-chart-card "} >
      <div className="card-header bg-primary text-light">
        <div className="row">
          <div className="col-md-10 pt-1">
            <p className={theme && "card-title-dark"} style={{ margin: 0 }}>Papers 
            <i className="pb-1 text-light"
                        data-toggle="popover" aria-label="Add Meetings or Appointments" data-cooltipz-dir="bottom"> <GrAdd /></i>
          </p> </div>
          <div className="col-md-2">
            <form className="">
              <div className="input-group shadow">
                <span className={`input-group-text  ${theme && "bg-info text-light"}`}>Grade</span>
                
                <select className={`form-control shadow-none ${theme && "bg-info text-light"}`} aria-label="Default select example">
                  <option selected>5th</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="card-content p-2">
        <div className="table-responsive">
          <table className={!theme ? "table table-striped table-hover" : "table-striped table-hover table table-dark"}>
            <caption>Date Sheet of class 5th</caption>
            <thead className="table-primary">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Grade</th>
                <th scope="col">Subject</th>
                <th scope="col">Teacher</th>
                <th scope="col">Time</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {row.map((data, index) =>
                <tr key={index}><td scope="row">{index + 1}</td>
                  <td>
                5th
                  </td>
                  <td>Urdu
                  </td>
                  <td>Muhammad Abrar</td>
                  <td> 02-03-2021 10:30</td>
                  <td>
                  <button className={`btn-icon float-end m-1 btn-danger bordered ${theme && "bg-dark text-light"}  shadow`}  data-toggle="popover"  aria-label="Results" data-cooltipz-dir="bottom"><AiOutlineClose/> </button>
                <button className={`btn-icon float-end btn-warning m-1  bordered ${theme && "bg-dark text-light"}  shadow`}  data-toggle="popover"  aria-label="Schedule" data-cooltipz-dir="bottom"><AiFillEdit /> </button>
  
                    </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>



    </div>

    <div className={theme ? "card students-chart-card-dark " : "card students-chart-card "} >
      <div className="card-header bg-primary text-light">
        <div className="row">
          <div className="col-md-10 ">
            <p className={theme && "card-title-dark"} style={{ margin: 0 }}>Results
           
          </p> </div>
          {/* <div className="col-md-2">
            <form className="pt-2">
              <div className="input-group shadow">
                <span className={`input-group-text  ${theme && "bg-info text-light"}`}>Grade</span>
                
                <select className={`form-control shadow-none ${theme && "bg-info text-light"}`} aria-label="Default select example">
                  <option selected>5th</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </form>
          </div> */}
        </div>
      </div>
      <div className="card-content p-2">
        <div className="table-responsive">
          <table className={!theme ? "table table-striped table-hover" : "table-striped table-hover table table-dark"}>
            <caption>Result of class 5th</caption>
            <thead className="table-primary">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Grade</th>
                <th scope="col">Subject</th>
                <th scope="col">Teacher</th>
                <th scope="col">Time</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {row.map((data, index) =>
                <tr key={index}><td scope="row">{index + 1}</td>
                  <td>
                5th
                  </td>
                  <td>Urdu
                  </td>
                  <td>Muhammad Abrar</td>
                  <td> 02-03-2021 10:30</td>
                  <td>
                  <button className={`btn-icon float-end m-1 btn-danger bordered ${theme && "bg-dark text-light"}  shadow`}  data-toggle="popover"  aria-label="Results" data-cooltipz-dir="bottom"><AiOutlineClose/> </button>
                <button className={`btn-icon float-end btn-warning m-1  bordered ${theme && "bg-dark text-light"}  shadow`}  data-toggle="popover"  aria-label="Schedule" data-cooltipz-dir="bottom"><AiFillEdit /> </button>
  
                    </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>



    </div>
    </div>
  </>
  );
}

export default ExamDetail