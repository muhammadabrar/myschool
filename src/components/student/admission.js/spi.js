import React, { useState, useEffect, useRef } from 'react';
import { Formik, Form } from "formik";
import { TextField, SelectField, DateField} from "../../TextField";
import * as Yup from "yup";
import { ArrowRight32, WarningAltFilled16, CheckmarkFilled16, Close24, ArrowDown32 } from "@carbon/icons-react";
import {
  Button,
  TextInput,
  DatePickerInput,
  DatePicker,
  InlineNotification,
  ToastNotification,
  InlineLoading
} from "carbon-components-react";

function Spi(props) {

    const [dob, setDob] = useState();
    const [gender, setGender] = useState("Male");
    const [disable, setDisable] = useState("No");


    const validateStep1 = Yup.object({
        name: Yup.string()
          .min(3, "Must be 3 characters or less")
          .required("Required"),
        father_name: Yup.string()
          .min(2, "Must be 2 characters or less")
          .required("Required"),
        father_cinc: Yup.string()
          .min(16, "Must be 16 characters or less")
          .required("Required"),
        contact1: Yup.string().required("Required"),
      });
    return (<>
          <>
                     <Formik
                       initialValues={{
                         name: "",
                         father_name: "",
                         std_cnic: "",
                         father_cinc: "",
                         father_occupation: "",
                         dob: "",
                         permanentaddress: "",
                         currentaddress: "",
                         residence: "",
                         caat_tribe: "",
                         contact1: "",
                         contact2: "",
                       }}
                       validationSchema={validateStep1}
                       onSubmit={(values) => {
                           console.log(props.index);
                           var data = values, gender, disable;
                         props.handleNext(props.index, data);
                        
                         console.log(values,  gender, disable);
                       }}
                     >
                       {(formik) => (
                         <div>
                           <Form>
                             <div className="row">
                               <div className="col-md-6  mb-3">
                                 <TextField
                                     helperText="must be 3 word* e.g: Muhammad Abrar"
                                   label="Student Name"
                                   name="name"
                                   type="text"
                                   placeholder="Enter Student Name"
                                 />
                               </div>
                               <div className="col-md-6  mb-3">
                                 <TextField
                                   label="Student Father's Name"
                                   name="father_name"
                                   type="text"
                                   placeholder={"Enter Student Father's Name"}
                                   helperText="must be 3 word* e.g: Israr Muhammad"

                                 />
                               </div>
                               <div className="col-md-6  mb-3">
                                 <TextField
                                   label="Student CNIC/form-B"
                                   name="std_cnic"
                                   type="text"
                                   placeholder={"Enter Student CNIC/form-B"}
                                   helperText="must be 16 number* e.g: 16202111111111"

 
                                 />
                               </div>
                               <div className="col-md-6  mb-3">
                                 <TextField
                                   label="Student Father's CNIC"
                                   name="father_cinc"
                                   type="text"
                                   placeholder={"Enter Student Father's CNIC"}
                                   helperText="must be 16 number* e.g: 16202111111111"

 
                                 />
                               </div>
                               <div className="col-md-6  mb-3">
                                 <TextField label="Phone #" 
                                   placeholder={"Enter Phone Nunber"}
                                   helperText="must be 16 number* e.g: 03171111111"

                                  name="contact1" type="text" />
                               </div>
                               <div className="col-md-6  mb-3">
                                 <TextField
                                   label="Father's Phone"
                                   name="contact2"
                                   type="text"
                                   placeholder={"Enter 2nd Phone Nunber"}
                                   helperText="must be 16 number* e.g: 03171111111"

 
                                 />
                                 
                               </div>
                               <div className="col-md-6  mb-3">
                                 
                                      <TextField name='dob' type="date" label={"Date of Birth"} />
                                 
                               </div>
                               <div className="col-md-6  mb-3">
                                 <TextField
                                   label="Father's Occupation"
                                   name="father_occupation"
                                   type="text"
                                   placeholder={"Enter Father's Occupation"}
 
                                 />
                               </div>
                               <div className="col-md-6 mb-3">
                                 <fieldset className="form-group">
                                   <div className="row">
                                     <legend className="col-form-label col-sm-3 pt-0">
                                       Gender:
                                     </legend>
                                     <div className="col-sm-9">
                                       <div className="form-check form-check-inline">
                                         <input
                                           className="form-check-input shadow-none"
                                           type="radio"
                                           checked={gender == "Male"}
                                           onChange={(e) => setGender("Male")}
                                         />
                                         <label className="form-check-label" for="gridRadios1">
                                           Male
                                         </label>
                                       </div>
                                       <div className="form-check form-check-inline">
                                         <input
                                           className="form-check-input shadow-none"
                                           type="radio"
                                           checked={gender == "Female"}
                                           onChange={(e) => setGender("Female")}
                                         />
                                         <label className="form-check-label" for="gridRadios2">
                                           Female
                                         </label>
                                       </div>
                                     </div>
                                   </div>
                                 </fieldset>
                               </div>
                               <div className="col-md-6 mb-3">
                                 <fieldset className="form-group">
                                   <div className="row">
                                     <legend className="col-form-label col-sm-3 pt-0">
                                       Disable:
                                     </legend>
                                     <div className="col-sm-9">
                                       <div className="form-check form-check-inline">
                                         <input
                                           className="form-check-input shadow-none"
                                           type="radio"
                                           checked={disable == "Yes"}
                                           onChange={(e) => setDisable("Yes")}
                                         />
                                         <label className="form-check-label" for="gridRadios1">
                                           Yes
                                         </label>
                                       </div>
                                       <div className="form-check form-check-inline">
                                         <input
                                           className="form-check-input shadow-none"
                                           type="radio"
                                           checked={disable == "No"}
                                           onChange={(e) => setDisable("No")}
                                         />
                                         <label className="form-check-label" for="gridRadios2">
                                           No
                                         </label>
                                       </div>
                                     </div>
                                   </div>
                                 </fieldset>
                               </div>
                               <div className="col-md-6  mb-3">
                                 <TextField label="Residence"
                                   placeholder={"Enter Residence"}
                                   name="residence" type="text" />
                               </div>
                               <div className="col-md-6  mb-3">
                                 <TextField label="Caat Tribe" 
                                   placeholder={"Enter Caat Tribe"}
                                  name="caat_tribe" type="text" />
                               </div>
                               <div className="col-md-12  mb-3">
                                 <TextField
                                   label="Permanent Address"
                                   name="permanentaddress"
                                   type="text"
                                   placeholder={"Enter Permanent Address"}
 
                                 />
                               </div>
                               <div className="col-md-12  mb-3">
                                 <TextField
                                   label="Current Address"
                                   name="currentaddress"
                                   type="text"
                                   placeholder={"Enter Current Address"}
 
                                 />
                               </div>
               
                               <hr className="text-dark"></hr>
                               <div className="form-btns">
                                 <Button kind="ghost" size="small">
                                   back
                                 </Button>
                                 <Button
                                   kind={!props.loading ? 'tertiary': "primary"}
                                   
                                   type="submit"
                                   size="small"
                                   disabled={props.loading && 'true'}
                                  //  onClick={()=> handleNext(index)}
                                   renderIcon={ArrowDown32}
                                 >
                                   {props.loading ? <><InlineLoading description="Loading..." />
                                   </>: 'Next'}
                                   
                                   
                                 </Button>
                               </div>
                             </div>
                           </Form>
                         </div>
                       )}
                      
                     </Formik>
                   </>
    </>
    );
}

export default Spi