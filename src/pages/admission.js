import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom';
import { currentTitle } from '../store/title'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Formik, Form } from 'formik';
import { TextField, SelectField } from '../components/TextField';
import * as Yup from 'yup';
import { Add24 } from '@carbon/icons-react';
const steps = ['Student Personal Info', 'Admission In', 'Fee'];
function Admission() {
    const [RefreshKey, setRefreshKey] = useState([1]) //refresh useeffect

    const dispatch = useDispatch()
    const theme = useSelector((state) => state.theme.value)
    useEffect(() => {
        // Update the document title using the browser API
        dispatch(currentTitle("Admission"))
    });
    //entry points////////////////////////////////////////////////////////////////

    // const [name, setName] = useState()
    // const [father_name, setFather_name] = useState()
    // const [std_cnic, setStd_cnic] = useState()
    // const [father_cinc, setFather_cinc] = useState()
    // const [father_occupation, setFather_occupation] = useState()
    const [dob, setDob] = useState()
    const [gender, setGender] = useState('Male')
    // const [permanentadress, setPermanentadress] = useState()
    // const [currentaddress, setCurrentaddress] = useState()
    // const [residence, setResidence] = useState()
    const [disable, setDisable] = useState('No')
    // const [caat_tribe, setCaat_tribe] = useState()
    // const [contact1, setContact1] = useState()
    // const [contact2, setContact2] = useState()
    // const [grade, setGrade] = useState()
    // const [admissionfee, setAdmissionfee] = useState()
    // const [monthlyfee, setMouthlyfee] = useState()
    // const [session, setsession] = useState()
    // const [grades, setGrades] = useState()


    //steps////////////////////////////////////////////////////////////////
    const [activeStep, setActiveStep] = useState(0);
    const [Allvalues, setvalues] = useState()
    const [ValuesStep1, setValuesStep1] = useState([]);
    const [ValuesStep2, setValuesStep2] = useState([]);
    const [ValuesStep3, setValuesStep3] = useState([]);
    //entry points////////////////////////////////////////////////////////////////






    const validateStep1 = Yup.object({
        name: Yup.string()
            .min(3, 'Must be 3 characters or less')
            .required('Required'),
        father_name: Yup.string()
            .min(2, 'Must be 2 characters or less')
            .required('Required'),
        father_cinc: Yup.string()
        .min(16, 'Must be 16 characters or less')
            .required('Required'),
        contact1: Yup.string()
            .required('Required'),
    })
    const validateStep2 = Yup.object({
        grade: Yup.string()
        .required('Required'),
        session: Yup.string()
            .required('Required'),
    })
    const validateStep3 = Yup.object({
        admissionFee: Yup.number(),
        monthlyFee: Yup.number(),
        otherFee: Yup.number()
    })
    const options = [
        { key: "Choess", value: "" },
        { key: "warkdang", value: "option1" },
        { key: "warkdang2", value: "option2" },
        { key: "warkdang3", value: "option3" },
        { key: "warkdang4", value: "option4" },

    ]
    //entry points validaTION////////////////////////////////////////////////////////////////











    const handleNext = () => {

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };




    //steps////////////////////////////////////////////////////////////////





    const handleSubmit = () => {
        
        let Formdata = [{
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
        }]

        console.log(Formdata)
    }

    return (<>
        <div className={!theme ? "page-content admission-page " : "page-content-dark"}>
            <div className="admission-card col-md-12">
                <div className="card col-md-8">
                    <div className="card-header">
                        Admission Form 
                    </div>
                    <div className="card-body ">
                        <Box sx={{ width: '100%' }}>
                            <Stepper activeStep={activeStep}>
                                {steps.map((label, index) => {
                                    const stepProps = {};
                                    const labelProps = {};


                                    return (
                                        <Step key={label} {...stepProps}>
                                            <StepLabel {...labelProps}>{label}</StepLabel>
                                        </Step>
                                    );
                                })}
                            </Stepper>
                            {activeStep <= steps.length && (
                                <>
                                    <div className=" mt-4">

                                        {activeStep == 0 &&
                                            <Formik
                                                initialValues={{
                                                    name: '',
                                                    father_name: '',
                                                    std_cnic: '',
                                                    father_cinc: '',
                                                    father_occupation: '',
                                                    dob: '',
                                                    permanentaddress: '',
                                                    currentaddress: '',
                                                    residence: '',
                                                    caat_tribe: '',
                                                    contact1: '',
                                                    contact2: '',

                                                }}
                                                validationSchema={validateStep1}
                                                onSubmit={values => {
                                                    handleNext()
                                                    console.log(values)
                                                    setValuesStep1(values)

                                                }}
                                            >
                                                {formik => (
                                                    <div>
                                                        <Form>
                                                            <div className="row">
                                                                <div className="col-md-6  mb-3">
                                                                    <TextField label="Name" name="name" type="text" />
                                                                </div>
                                                                <div className="col-md-6  mb-3">
                                                                    <TextField label="Father's Name" name="father_name" type="text" />
                                                                </div>
                                                                <div className="col-md-6  mb-3">
                                                                    <TextField label="Student CNIC/form-B" name="std_cnic" type="text" />
                                                                </div>
                                                                <div className="col-md-6  mb-3">
                                                                    <TextField label="Father's CNIC" name="father_cinc" type="text" />
                                                                </div>
                                                                <div className="col-md-6  mb-3">
                                                                    <TextField label="Phone #" name="contact1" type="text" />
                                                                </div>
                                                                <div className="col-md-6  mb-3">
                                                                    <TextField label="Father's Phone" name="contact2" type="text" />
                                                                </div>
                                                                <div className="col-md-6  mb-3">
                                                                    <TextField label="Date of Birth" name="dob" type="date" />
                                                                </div>
                                                                <div className="col-md-6  mb-3">
                                                                    <TextField label="Father's Occupation" name="father_occupation" type="text" />
                                                                </div>
                                                                <div className="col-md-6 mb-3">
                                                                    <fieldset className="form-group">
                                                                        <div className="row">
                                                                            <legend className="col-form-label col-sm-3 pt-0">Gender</legend>
                                                                            <div className="col-sm-9">
                                                                                <div className="form-check form-check-inline">
                                                                                    <input
                                                                                        className="form-check-input shadow-none"
                                                                                        type="radio"
                                                                                        checked={gender == 'Male'}
                                                                                        onChange={(e) => setGender('Male')} />
                                                                                    <label className="form-check-label" for="gridRadios1">
                                                                                        Male
                                                                                    </label>
                                                                                </div>
                                                                                <div className="form-check form-check-inline">
                                                                                    <input
                                                                                        className="form-check-input shadow-none" type="radio"
                                                                                        checked={gender == 'Female'}
                                                                                        onChange={(e) => setGender('Female')} />
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
                                                                            <legend className="col-form-label col-sm-3 pt-0">Disable</legend>
                                                                            <div className="col-sm-9">
                                                                                <div className="form-check form-check-inline">
                                                                                    <input className="form-check-input shadow-none" type="radio"
                                                                                        checked={disable == 'Yes'}
                                                                                        onChange={(e) => setDisable('Yes')} />
                                                                                    <label className="form-check-label" for="gridRadios1">
                                                                                        Yes
                                                                                    </label>
                                                                                </div>
                                                                                <div className="form-check form-check-inline">
                                                                                    <input className="form-check-input shadow-none" type="radio"
                                                                                        checked={disable == 'No'}
                                                                                        onChange={(e) => setDisable('No')} />
                                                                                    <label className="form-check-label" for="gridRadios2">
                                                                                        No
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </fieldset>
                                                                </div>
                                                                <div className="col-md-6  mb-3">
                                                                    <TextField label="Residence" name="residence" type="text" />
                                                                </div>
                                                                <div className="col-md-6  mb-3">
                                                                    <TextField label="Caat Tribe" name="caat_tribe" type="text" />
                                                                </div>
                                                                <div className="col-md-12  mb-3">
                                                                    <TextField label="Permanent Address" name="permanentaddress" type="text" />
                                                                </div>
                                                                <div className="col-md-12  mb-3">
                                                                    <TextField label="Current Address" name="currentaddress" type="text" />
                                                                </div>

                                                                <hr className="text-dark"></hr>

                                                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                                                    <Button
                                                                        color="inherit"
                                                                        disabled={activeStep === 0}
                                                                        onClick={handleBack}
                                                                        sx={{ mr: 1 }}
                                                                    >
                                                                        Back
                                                                    </Button>
                                                                    <Box sx={{ flex: '1 1 auto' }} />

                                                                    <Button type="submit"  >
                                                                        Next
                                                                    </Button>

                                                                </Box>
                                                            </div>
                                                        </Form>
                                                    </div>
                                                )}
                                            </Formik>


                                        }
                                        {activeStep == 1 && 
                                        <Formik
                                                initialValues={{
                                                    grade: '',
                                                    session: '',
                                                    p_school: '',
                                                    p_session: '',
                                                }}
                                                validationSchema={validateStep2}
                                                onSubmit={values => {
                                                    handleNext()
                                                    console.log(values)


                                                    setValuesStep2(values)
                                                }}
                                            >
                                                {formik => (
                                                    <div>
                                                        <Form>
                                                            <div className="row">
                                                                <div className="col-md-6  mb-3">
                                                                <SelectField label="Grade" name="grade" options={options} />
                                                                </div>
                                                                <div className="col-md-6  mb-3">
                                                                    <SelectField label="Session" name="session" options={options} />
                                                                </div>
                                                                <div className="col-md-6  mb-3">
                                                                    <TextField label="Previous School" name="p_school" type="text" />
                                                                </div>
                                                                <div className="col-md-6  mb-3">
                                                                    <TextField label="Previous Session" name="p_session" type="text" />
                                                                </div>
                                                                <div className="col-md-6  mb-3">
                                                                <div class="custom-file">
                                                                <input type="file" class="custom-file-input" id="customFile" />
                                                                <label class="custom-file-label" for="customFile">Previous certificate</label>
                                                                </div>
                                                                </div>
                                                                

                                                                <hr className="text-dark"></hr>

                                                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                                                    <Button
                                                                        color="inherit"
                                                                        disabled={activeStep === 0}
                                                                        onClick={handleBack}
                                                                        sx={{ mr: 1 }}
                                                                    >
                                                                        Back
                                                                    </Button>
                                                                    <Box sx={{ flex: '1 1 auto' }} />

                                                                    <Button type="submit"  >
                                                                        Next
                                                                    </Button>

                                                                </Box>
                                                            </div>
                                                        </Form>
                                                    </div>
                                                )}
                                            </Formik>
}
                                        {activeStep == 2 && 
                                        <Formik
                                        initialValues={{
                                            admissionFee: '',
                                            monthlyFee: '',
                                            otherFee: '',
                                        }}
                                        validationSchema={validateStep3}
                                        onSubmit={values => {
                                            
                                            console.log(values)
                                            setValuesStep3(values)


                                            handleSubmit()



                                        }}
                                    >
                                        {formik => (
                                            <div>
                                                <Form>
                                                    <div className="row">
                                                        
                                                        <div className="col-md-6  mb-3">
                                                            <TextField label="Admission Fee" name="admissionFee" type="text" />
                                                        </div>
                                                        <div className="col-md-6  mb-3">
                                                            <TextField label="Monthly Fee" name="monthlyFee" type="text" />
                                                        </div>
                                                        <div className="col-md-6  mb-3">
                                                            <TextField label="Other Fee" name="otherFee" type="text" />
                                                        </div>
                                                        <div className="col-md-6  mb-3">
                                                        <label >Total </label>
                                                        <input type="text" class="form-control" value={Number(formik.values.admissionFee) + Number(formik.values.monthlyFee) + Number(formik.values.otherFee)} />
                                                        </div>

                                                        <hr className="text-dark"></hr>

                                                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                                            <Button
                                                                color="inherit"
                                                                disabled={activeStep === 0}
                                                                onClick={handleBack}
                                                                sx={{ mr: 1 }}
                                                            >
                                                                Back
                                                            </Button>
                                                            <Box sx={{ flex: '1 1 auto' }} />

                                                            <Button type="submit"  >
                                                                Finish
                                                            </Button>

                                                        </Box>
                                                    </div>
                                                </Form>
                                            </div>
                                        )}
                                    </Formik>



                                        }




                                    </div>
                                </>
                            )

                                // : (
                                //     <>
                                //         <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                                //         <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                //             <Button
                                //                 color="inherit"
                                //                 disabled={activeStep === 0}
                                //                 onClick={handleBack}
                                //                 sx={{ mr: 1 }}
                                //             >
                                //                 Back
                                //             </Button>
                                //             <Box sx={{ flex: '1 1 auto' }} />


                                //             <Button onClick={handleNext}>
                                //                 {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                //             </Button>
                                //         </Box>
                                //     </>
                                // )

                            }
                        </Box>


                    </div>

                </div>
            </div>
        </div>
    </>
    );
}

export default Admission