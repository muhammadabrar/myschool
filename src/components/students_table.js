import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdOtherHouses } from "react-icons/md";
import avater from "../cover.jpg";
import { NavLink } from "react-router-dom";
import {
  Button,
  OverflowMenu,
  OverflowMenuItem,
  Search,
  TextInput,
  Select
} from "carbon-components-react";
import { ChevronDown16, ChevronUp16 } from "@carbon/icons-react";
import { isMobile } from "react-device-detect";

function Students() {
  const theme = useSelector((state) => state.theme.value);
  const [search, setsearch] = useState();
  const [more, setmore] = useState();

  const [data, setdata] = useState([
    {
      name: "Muhammad Abrar",
      rollNo: 21501,
      Father: "Israr Muhammad",
      contact1: "03405216890",
      contact2: "03405216890",
      grade: "5th",
      status: "Good",
      address: "moh: redawan, po: maini, swabi kpk pakistan",
    },
    {
      name: "Awais Rahman",
      rollNo: 21502,
      Father: "Saqib Khan",
      contact1: "03122565987",
      contact2: "03324565855",
      grade: "5th",
      address: "moh: redawan, po: maini, swabi kpk pakistan",
      status: "Good",
    },
    {
      rollNo: 21503,
      name: "Noman Khan",
      Father: "Ismail Khan",
      contact1: "03126564987",
      contact2: "032136547898",
      grade: "5th",
      address: "moh: redawan, po: maini, swabi kpk pakistan",
      status: "Good",
    },
    {
      rollNo: 21504,
      name: "Wajid khan",
      Father: "toseef Khan",
      contact1: "03124249987",
      contact2: "03124249987",
      grade: "5th",
      address: "moh: redawan, po: maini, swabi kpk pakistan",
      status: "Good",
    },
    {
      rollNo: 21505,
      name: "Wajid khan",
      Father: "toseef Khan",
      contact1: "03124249987",
      contact2: "03124249987",
      grade: "5th",
      address: "moh: redawan, po: maini, swabi kpk pakistan",
      status: "Good",
    },
    {
      rollNo: 21506,
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

  useEffect(() => {
    searchResult();
  }, [search]);
  const searchResult = async (e) => {
    if (search) {
      const results = data.filter(
        (data) =>
          data.name.toLowerCase().includes(search) ||
          data.Father.toLowerCase().includes(search) ||
          data.address.toLowerCase().includes(search) ||
          data.rollNo.toLowerCase().includes(search)
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

  return (
    <>
      <div
        className={
          theme ? "card students-chart-card-dark " : "card students-chart-card "
        }
      >
        <div className="card-header bg-primary text-light">
          {isMobile && (
            <input
              onChange={handlesearch}
              placeholder="example(abrar)"
              size="sm"
              className={`form-control search shadow-none ${
                theme && "bg-dark text-light"
              }`}
            />
          )}
          <div className="students-header">
            {!isMobile && (
              <input
                type="text"
                onChange={handlesearch}
                placeholder="example(abrar)"
                className={`form-control search shadow-none ${
                  theme && "bg-dark text-light"
                }`}
              />
            )}
            <select
              className={`form-control select shadow-none ${
                theme && "bg-dark text-light"
              }`}
            >
              <option selected>5th</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select
              className={`form-control select shadow-none ${
                theme && "bg-dark text-light"
              }`}
            >
              <option selected>2021</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <div className="s-menu">
              <OverflowMenu
                flipped="true"
                className="MenuOverflow"
                data-floating-menu-container
                selectorPrimaryFocus={".optionOne"}
              >
                <OverflowMenuItem className="optionOne" itemText="Admission" />
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

        <div className="students-cards  fade-in-down p-2">
          
          {row.map((data, index) => (
            <div className={`student-card ${theme && "bg-dark"}`}>
              <NavLink to={`student/${index + 1}`}>
                <img src={avater} className="avater" alt="..." />
              </NavLink>

              <p className="name">
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

              <p className="text-muted">{data.rollNo} ({data.grade})</p>
              <snap className="divider"></snap>
              {more == data.rollNo && (
                <>
                  <div className="contact">
                    
                    {data.contact1}
                    <br />
                    {data.contact2}
                  </div>

                  <div className="address">{data.address}</div>
                  <p className="grade"></p>
                </>
              )}
              <Button
                kind="ghost"
                size="small"
                className="mt-1"
                onClick={() =>
                  setmore(more == data.rollNo ? "00000" : data.rollNo)
                }
                renderIcon={more == data.rollNo ? ChevronUp16: ChevronDown16}
              >
                More
              </Button>

             
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Students;
