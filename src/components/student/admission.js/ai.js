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

function Ai(props) {

    const validateStep1 = Yup.object({
    grade: Yup.string().required("Required"),
    session: Yup.string().required("Required"),
      });
    return (<>
          <>
                     <Formik
                       initialValues={{
                        grade: '',
                        session: '',
                        p_school: '',
                        p_session: '',
                       }}
                       validationSchema={validateStep1}
                       onSubmit={(values) => {
                           console.log(props.index);
                           
                         props.handleNext(props.index, values);
                        
                         console.log(values);
                       }}
                     >
                       {(formik) => (
                         <div>
                           <Form>
                             <div className="row">
                               <div className="col-md-6  mb-3">
                                 <TextField
                                    //  helperText="must be 3 word* e.g: Muhammad Abrar"
                                   label="previous School"
                                   name="name"
                                   type="text"
                                   placeholder="Enter previous School Name"
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

export default Ai