
import Hero from '../components/hero';

import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom';

import { currentTitle } from '../store/title'
import { AiOutlineMenu, AiFillEdit, AiOutlineUserDelete, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import { BiDetail } from 'react-icons/bi';
import Attendance from '../components/staff/AttendanceChart';
// import Salary from '../components/staff/salary';
import Classess from '../components/staff/classes';
import Cbreadcrumb from '../components/cbreadcrumb';
import { isMobile } from "react-device-detect";
import {
  ChevronDown16,
  ChevronUp16,
  SubtractAlt24,
  Edit24,
  TrashCan24,
  Add24,
} from "@carbon/icons-react";
import cover from "../cover.jpg";
import SalaryChart from '../components/staff/salaryChart';
import EditStaff from '../components/staff/edit';

function Staffs() {
  const theme = useSelector((state) => state.theme.value)
  const { staffid } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    // Update the document title using the browser API
    dispatch(currentTitle("Staff Profile"))
  }, []);

  const [Isdropdown, setIsDropdown] = useState(isMobile ? false : true);
  const [edit, setedit] = useState(false);





  //   dispatch(currentTitle("staffs"))
  return (<>
    <div className={!theme ? "page-content " : "page-content-dark"}>
    <Cbreadcrumb goto="Staff" />
    <div className='row'>
      <div className='col-md-3'>
      <div
              className={`card profile-detail ${
                !theme ? " shadow " : " text-light shadow bg-dark"
              }`}
            >
              <div className="card-body ">
                <img src={cover} className="profile" />
                <p className="pt-1">Muhammad Abrar</p>
                <p className="text-muted">
                  <small>Teacher</small>
                </p>
                <p>
                  <span className="text-success">Available</span>
                </p>
                <div className="profile-actions  mt-2">
                  <button className={`p-action ${theme && "text-light"}`}>
                    <i className="p-a-icon">
                      <SubtractAlt24 />
                    </i>
                    With Drawal
                  </button>
                  <button className={`p-action ${theme && "text-light"}`} onClick={()=> setedit(true)}>
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
                      <p className="info-h">Current Address</p>
                      <p className="text-muted info-v">
                        moh: redawan, po: maini, swabi kpk pakistan{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
      </div>
      <div className='col-md-9'>
      <h3 className='staff-profile-titles bg-dark text-light'>States</h3>

      <div className="staff-states">
              <div className="std-state">
                <Attendance />
              </div>
              <div className="std-state">
                <SalaryChart />
              </div>
            </div>
      <h3 className='staff-profile-titles bg-dark text-light mt-3'>Classes</h3>

            <Classess />
      </div>

    </div>
      

     
    </div>

<EditStaff show={edit} onHide={() => setedit(false)}/>
    
  
  </>
  );
}

export default Staffs;

