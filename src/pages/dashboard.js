

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
import Classes from '../components/classes';

function Dashboard() {
  const theme = useSelector((state) => state.theme.value)
  
  const dispatch = useDispatch()
  useEffect(() => {
    // Update the document title using the browser API
    dispatch(currentTitle("Dashboard"))
  }, []);


  return (<>
    <div className={!theme ? "page-content " : "page-content-dark"}>
      <>
        <Sparkboxes />
        <Students_chart />
        <div className="row">
              <div className="col-md-9"><Students /></div>
              <div className="col-md-3"><Students_pie/></div>
        </div>
        <div className="row">
              <div className="col-md-6"><Staff /></div>
              <div className="col-md-6"><Exams /></div>
             
        </div>
        <Classes />
        
        
      </>

    </div>
  </>
  );
}

export default Dashboard;