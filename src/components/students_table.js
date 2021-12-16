import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select';
import { MdOtherHouses } from 'react-icons/md'
import avater from '../cover.jpg';
import { NavLink } from 'react-router-dom';
import { OverflowMenu, OverflowMenuItem } from 'carbon-components-react';

import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  Search
} from "carbon-components-react";
function Students() {
  const theme = useSelector((state) => state.theme.value)
  const [search, setsearch] = useState()

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

  useEffect(() => {
    searchResult()
  }, [search]);
  const searchResult = async (e) => {
    if (search) {

      const results = data.filter(data =>
        data.name.toLowerCase().includes(search)
        || data.Father.toLowerCase().includes(search)
        || data.address.toLowerCase().includes(search)
        || data.rollNo.toLowerCase().includes(search)

      );
      console.log("result :", results)
      setrow(results);
    } else {
      setrow(data);
      console.log("row :", row)

    }

  }
  const handlesearch = event => {
    if (event.target.value) {
      setsearch(event.target.value);

    } else {
      setrow(data);
    }
  };

  return (<>
    <div className={theme ? "card students-chart-card-dark " : "card students-chart-card "} >
      <div className="card-header bg-primary text-light">
        <div className="students-header">
          <div className="students-header-title">
            <p className={theme && "card-title-dark"} style={{ margin: 0 }}>Students</p>
          </div>
          <div className="search">
            <form className="">
              <div className="input-group shadow">
                <span className={`input-group-text  ${theme && "bg-info text-light"}`}>Search Student</span>
                <input type="text" onChange={handlesearch} aria-label="First name" placeholder="example(abrar)" className={`form-control shadow-none ${theme && "bg-info text-light"}`} />
                <select className={`form-control shadow-none ${theme && "bg-info text-light"}`} aria-label="Default select example">
                  <option selected>5th</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <select className={`form-control shadow-none ${theme && "bg-info text-light"}`} aria-label="Default select example">
                  <option selected>2021</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>

              </div>
            </form>


          </div>
          <div className="s-menu">

            <OverflowMenu className="MenuOverflow"
              data-floating-menu-container
              selectorPrimaryFocus={'.optionOne'}>
              <OverflowMenuItem
                className="optionOne"
                itemText="Admission"

              />
              <OverflowMenuItem
                className="optionTwo"
                itemText="Withdrawal Students"
                requireTitle
              />
              <OverflowMenuItem itemText="Test Record" />
              <OverflowMenuItem itemText="Attendance" hasDivider />
            </OverflowMenu>
          </div>
        </div>




      </div>
      <div className="card-content p-2">
        {row.map((data, index) =>
          <div className={`bx--grid student-row  ${theme && "bg-dark"}`}>
            <div className="c2">
              <NavLink className={!theme ? "navLink text-dark" : "navLink text-light"} to={`student/${index + 1}`}>
                <img src={avater} className="avater" alt="..." />
              </NavLink>
            </div>
            <div className="c3">
              <NavLink className={!theme ? "navLink text-dark" : "navLink text-light"} to={`student/${index + 1}`}>
                {data.name} ({data.rollNo})<br />{data.Father}
              </NavLink>
            </div>
            <div className="c7">	{data.contact1}<br />{data.contact2}</div>
            <div className="c4">{data.address}</div>
            <div className="c5">{data.grade}</div>
          </div>
        )}
      </div>


    </div>
  </>
  );
}

export default Students