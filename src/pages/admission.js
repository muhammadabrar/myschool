import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { currentTitle } from "../store/title";
import { Formik, Form } from "formik";
import { TextField, SelectField, DateField } from "../components/TextField";
import * as Yup from "yup";
import { ArrowRight32, WarningAltFilled16, CheckmarkFilled16, Close24, ArrowDown32 } from "@carbon/icons-react";
import {
  Button,
  TextInput,
  DatePickerInput,
  DatePicker,
  InlineNotification,
  ToastNotification,
} from "carbon-components-react";
import Cbreadcrumb from "../components/cbreadcrumb";
import Spi from "../components/student/admission.js/spi";
import Ai from "../components/student/admission.js/ai";


function Admission() {
  const [RefreshKey, setRefreshKey] = useState([1]); //refresh useeffect

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);
  useEffect(() => {
    // Update the document title using the browser API
    dispatch(currentTitle("Admission"));
  });
  //entry points////////////////////////////////////////////////////////////////


  //steps////////////////////////////////////////////////////////////////
  const [activeStep, setActiveStep] = useState({});
  const [steps, setsteps] = useState([
    {
      title: "Student Personal Info",
      Isactive: true,
      loading: false,
      success: false,
      err: false
    },
    {
        title: "Admission In",
      Isactive: false,
      loading: false,
      success: false,
      err: false
    },
    {
        title: "Fee",
      Isactive: false,
      loading: false,
      success: false,
      err: false
    }
  ]);

  const [ValuesStep1, setValuesStep1] = useState([]);
  const [ValuesStep2, setValuesStep2] = useState([]);
  const [ValuesStep3, setValuesStep3] = useState([]);
  //entry points////////////////////////////////////////////////////////////////


  const validateStep2 = Yup.object({
    grade: Yup.string().required("Required"),
    session: Yup.string().required("Required"),
  });
  const validateStep3 = Yup.object({
    admissionFee: Yup.number(),
    monthlyFee: Yup.number(),
    otherFee: Yup.number(),
  });
  const options = [
    { key: "Choess", value: "" },
    { key: "warkdang", value: "option1" },
    { key: "warkdang2", value: "option2" },
    { key: "warkdang3", value: "option3" },
    { key: "warkdang4", value: "option4" },
  ];
  //entry points validaTION////////////////////////////////////////////////////////////////

  const handleNext = (index, values) => {
      let updateSteps = [...steps]
      updateSteps[index].success = true
      updateSteps[index+1].Isactive = true  
      setsteps(updateSteps)
      console.log(steps)
      console.log(values);
     {index == 0 && setValuesStep1(values)}
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  //steps////////////////////////////////////////////////////////////////

  const handleSubmit = () => {
    let Formdata = [
      {
        name: ValuesStep1.name,
        father_name: ValuesStep1.father_name,
        std_cnic: ValuesStep1.std_cnic,
        father_cinc: ValuesStep1.father_cinc,
        father_occupation: ValuesStep1.father_occupation,
        dob: ValuesStep1.dob,
        permanentaddress: ValuesStep1.permanentaddress,
        currentaddress: ValuesStep1.currentaddress,
        residence: ValuesStep1.residence,
        caat_tribe: ValuesStep1.caat_tribe,
        contact1: ValuesStep1.contact1,
        contact2: ValuesStep1.contact2,
        grade: ValuesStep2.grade,
        session: ValuesStep2.session,
        p_school: ValuesStep2.p_school,
        p_session: ValuesStep2.p_session,
        admissionFee: ValuesStep3.admissionFee,
        monthlyFee: ValuesStep3.monthlyFee,
        otherFee: ValuesStep3.otherFee,
      },
    ];

    console.log(Formdata);
  };


  return (
    <>
      <div
        className={
          !theme ? "page-content admission-page " : "page-content-dark"
        }
      >
        <Cbreadcrumb goto="admission" />
        
        <div className="admission-card col-md-12">
          
          <div className="card col-md-8">
            <div className="card-header">
              <h4>Admission Form</h4>
            </div>
            <div className="card-body ">
              {steps.map((item, index) =>
                <div key={index} className={`tl-item  ${item.success ? "s-active": item.err ? "d-active": item.Isactive && 'active'}  `}>
                  <div className={`tl-dot  ${item.success ? "b-success": item.err ? "b-danger": item.Isactive ? "b-warning" : "b-primary "}`} ></div>
                  <div className="tl-content">
                    
                    <p><strong>{"step "+ (index+1) + ": "}{item.title} {item.success ? <i className="text-success"><CheckmarkFilled16/></i>: item.err && <i><WarningAltFilled16/></i>}</strong></p>
                    
                    {item.err && <>
         <div className="err">
           <p>Some Thing Is Wrong<br/><small></small></p> 
           <i><Close24 /></i>
         </div>
      
                    </>}

                    {item.Isactive && !item.success &&
                     <>
                    {index == 0 &&  <Spi handleNext={handleNext} index={index} />}
                    {index == 1 &&  <Ai handleNext={handleNext} index={index} />}
                    {index == 2 &&  <>step 3</>}

                   </>
                    }
                    {index == 0 && item.success && <>
                      <p><>Student Name: {ValuesStep1.name}dcd</></p>
                    </>}
                   
                    
                  </div>
                </div>
              )}
              
              <>
               
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admission;
