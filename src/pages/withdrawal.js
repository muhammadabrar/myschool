
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Students from '../components/students_table';
import Staff from '../components/staff_table';
import Students_chart from '../components/students_chart';
import Students_pie from '../components/students_pie';
import Sparkboxes from '../components/sparkbox';
import { Signup } from '../components/form'
import Exams from '../components/exam_table';
import { currentTitle} from '../store/title'
import { GrAdd } from 'react-icons/gr'
import { AiFillEdit, AiOutlineClose} from 'react-icons/ai'
import Cbreadcrumb from '../components/cbreadcrumb';

function Withdrawal() {
  const theme = useSelector((state) => state.theme.value)
  
  const dispatch = useDispatch()
  useEffect(() => {
    // Update the document title using the browser API
    dispatch(currentTitle("Withdrawal Students"))
  }, []);

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


  return (<>
    <div className={!theme ? "page-content " : "page-content-dark"}>
    <Cbreadcrumb goto="classes" />

    <div className={theme ? "card students-chart-card-dark " : "card students-chart-card "} >
      <div className="card-header bg-primary text-light">
        <div className="row">
          <div className="col-md-10 pt-3">
            <p className={theme && "card-title-dark"} style={{ margin: 0 }}>Withdrawal Students 
            <i className="pb-1 text-light"
                        data-toggle="popover" aria-label="Add Meetings or Appointments" data-cooltipz-dir="bottom"> <GrAdd /></i>
          </p> </div>
          <div className="col-md-2">
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
          </div>
        </div>




      </div>
      <div className="card-content p-2">


        <div className="table-responsive">

          <table className={!theme ? "table table-striped table-hover" : "table-striped table-hover table table-dark"}>
            <caption>Classes of grade 5th</caption>
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
                  <td>10:30</td>
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
    <br/>


    </div>
  </>
  );
}

export default Withdrawal;