import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select';
import { IoMdPersonAdd } from 'react-icons/io'
import avater from '../cover.jpg';
import { NavLink } from 'react-router-dom';
import AddStaff from './staff/add'
import { ChevronDown16, ChevronUp16, ChevronRight16, Add24 } from "@carbon/icons-react";
import {
    Button,
    OverflowMenu,
    OverflowMenuItem,
  } from "carbon-components-react";
import { isMobile } from 'react-device-detect';
function Staff() {
    const theme = useSelector((state) => state.theme.value)
    const [search, setsearch] = useState();
    const [data, setdata] = useState([
        {
            "name": "Muhammad Abrar",
            "post": "principle",
            "contact1": '03405216890',
            "contact2": '03405216890',
            "gender": "Male",
        },
        {
            "name": "Awais Rahman",
            "post": "PTI",
            "contact1": '03122565987',
            "contact2": '03324565855',
            "gender": "Male"
        },
        {
            "name": "Noman Khan",
            "post": "Teacher",
            "contact1": '03126564987',
            "contact2": '032136547898',
            "gender": "Male"
        },
        {
            "name": "Wajid khan",
            "post": "Teacher",
            "contact1": '03124249987',
            "contact2": '03124249987',
            "gender": "Male"
        }
    ])
  const [row, setrow] = useState(data);

    const [isAdd, setisAdd] = useState(false)
    const [refresh, setrefresh] = useState(1)
    useEffect(() => {
        searchResult();
      }, [search]);
      const searchResult = async (e) => {
        if (search) {
          const results = data.filter(
            (data) =>
              data.name.toLowerCase().includes(search)
          );
          console.log("result :", results);
          setrow(results);
        } else {
          setrow(data);
          console.log("row :", row);
        }
      };
      const handlesearch = (event) => {
        if (event.target.value) {
          setsearch(event.target.value);
        } else {
          setrow(data);
        }
      };


    return (<>
        <div className={theme ? "card students-chart-card-dark " : "card students-chart-card "} >
            <div className="card-header bg-primary text-light">
                <div className="staff-Header">
                    <>
                    {isMobile && <Button
                kind="secondary"
                size='field'
                style={{width:"100%", marginBottom:".5rem", borderRadius: "5px"}}
                className='staff-btn'
                renderIcon={Add24}
                onClick={()=>setisAdd(true)}
              >
                Add Staff
              </Button>}

              {!isMobile && <Button
                kind="secondary"
                size='field'
                style={{width:"10rem", marginRight:".5rem", borderRadius: "5px"}}
                className='staff-btn'
                renderIcon={Add24}
                onClick={()=>setisAdd(true)}
              >
                Add Staff
              </Button>}
                    <input
                        type="text"
                        onChange={handlesearch}
                        placeholder="example(abrar)"
                        className={`form-control search shadow-none ${
                            theme && "bg-dark text-light"
                        }`}
                        />
                    </>
                    <div>
                    
                    </div>
                </div>
            </div>
            <div className="students-cards fade-in-down p-2">
          {row.map((data, index) => (
            <div className={`student-card  ${theme && "bg-dark"}`}>
              <NavLink to={`staff/${index + 1}`}>
                <img src={avater} className="avater" alt="..." />
              </NavLink>

              <p className="name">
                <NavLink
                  className={
                    !theme ? "navLink text-dark" : "navLink text-light"
                  }
                  to={`staff/${index + 1}`}
                >
                  {data.name}
                </NavLink>
              </p>
              <p className="text-muted">{data.post} </p>
              <p className='status'>gender | Attendance</p>
              <snap className="divider"></snap>

              <div className="contact">
                    
                    {data.contact1}
                    <br />
                    {data.contact2}
                  </div>
              <snap className="divider"></snap>
              <Button
                kind="ghost"
                size="small"
                href={`staff/${index + 1}`}
                renderIcon={ChevronRight16}
              >
                More
              </Button>

              
            </div>
          ))}
        </div>
           



        </div>
        <AddStaff show={isAdd} onHide={() => setisAdd(false)} refresh={()=> setrefresh(refresh + 1)}/>
    </>
    );
}

export default Staff