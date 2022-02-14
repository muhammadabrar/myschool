import { UnorderedList, ListItem } from "carbon-components-react";
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { NavLink, useParams } from 'react-router-dom';
import { currentTitle } from "../store/title";

export const Progress = () => {
  // const { examid } = useParams()
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);
  useEffect(() => {
    // Update the document title using the browser API
    dispatch(currentTitle("Progress"));
  }, []);
  return (
    <>
      <div className={!theme ? "page-content " : "page-content-dark"}>
        <div className="card">
          <div className="card-body p-5 m-5">
          <>
         
          <span></span>
            <h3 title="Students">Students</h3>
                <div className="ps-4">
                  <UnorderedList>
                    <ListItem className="text-muted">Admission</ListItem>
                    <ListItem className="text-muted">display students</ListItem>
                    <ListItem className="text-muted">Search</ListItem>
                    <ListItem className="text-muted">
                      profile
                    <UnorderedList nested>
                      <ListItem className="text-muted">Details</ListItem>
                      <ListItem className="text-muted">States</ListItem>
                      <ListItem className="text-muted">Quiz </ListItem>
                      <ListItem className="text-muted">Exam</ListItem>
                      <ListItem className="text-muted">Fee</ListItem>
                      <ListItem className="text-muted">Complaints</ListItem>
                    </UnorderedList>
                    </ListItem>
                    <ListItem >Test Records</ListItem>
                    <ListItem>withdrawal</ListItem>
                    <ListItem>Attendance</ListItem>
                    <ListItem className="text-muted">charts</ListItem>
                  </UnorderedList>
                </div>
            <h3 title="Exam">Exam</h3>
            <div className="ps-4">
                  <UnorderedList>
                    <ListItem >Add Exam</ListItem>
                    <ListItem  className="text-muted">display Exams</ListItem>
                    <ListItem  >display Exam Details</ListItem>
                    <ListItem >display Exam Papers & Results</ListItem>
                    <ListItem  className="text-muted">Cancel | Done | Delete Exam</ListItem>
                  </UnorderedList>
                </div>
            <h3 title="staffs">staffs</h3>
            <UnorderedList className="ps-4">
              <ListItem className="text-muted">Add</ListItem>
              <ListItem className="text-muted">display</ListItem>
              <ListItem className="text-muted">profile</ListItem>
            </UnorderedList>
            <h3 title="Classes">Classes</h3>
            <UnorderedList className="ps-4">
              <ListItem >Add</ListItem>
              <ListItem className="text-muted">display</ListItem>
            </UnorderedList>
            <h3 title="admin">admin</h3>
            <h3 title="Finance">Finance</h3>

          </>
          </div>
        </div>
      </div>
    </>
  );
};
