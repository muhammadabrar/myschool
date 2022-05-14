
import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom';
import { Table, Button, Image, Modal } from 'react-bootstrap'
import moment from 'moment';
import { FileUploader } from 'carbon-components-react';
import { Formik, Form } from 'formik';
import { TextField, SelectField } from '../TextField';
import * as Yup from 'yup';
import axios from 'axios';
function EditStaff(props) {
    const [gender, setGender] = useState('Male')
    const [disable, setDisable] = useState('No')
    const [cv, setCv] = useState()
    const [dp, setDp] = useState()
    const [success, setsuccess] = useState(false)
    const [err, seterror] = useState(false)

    const theme = useSelector((state) => state.theme.value)
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const validate = Yup.object({
        name: Yup.string()
            .min(3, 'Must be 3 characters or less')
            .required('Required'),
            f_name: Yup.string()
            .min(3, 'Must be 3 characters or less')
            .required('Required'),
            Phone: Yup.string()
            .required('Required'),
    })
    var currentmonth = moment().months();
    console.log(currentmonth)



    const handleSubmit =(data)=>{
        
        
        const newFile = new File([cv], cv.name, { type: cv.type, lastModified: Date.now()})
        const file = new FormData()
  file.append('file', newFile) 
        console.log(file)


        axios.post('http://localhost:5000/api/staff',file,data, {
            headers: {
                'Content-Type': 'application/json'
            },
             data
        })
            .then(function (response) {
                console.log(response);
                props.refresh()
            })
            .catch(function (error) {
                console.log(error);
                seterror(true)
            });
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={!theme ? " " : " "}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                        Edit Staff
                    
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik
                    initialValues={{
                        name: '',
                        f_name: '',
                        cnic: '',
                        Phone: '',
                        Phone2: '',
                        dob: '',
                        cAddress: '',
                        salary: '',
                    }}
                    validationSchema={validate}
                    onSubmit={values => {
                        const formdata = {
                            name: values.name,
                            f_name: values.f_name,
                            cnic: values.cnic,
                            Phone: values.Phone,
                            Phone2: values.Phone2,
                            dob: values.dob,
                            cAddress: values.cAddress,
                            salary: values.salary,
                            gender: gender,
                            disable: disable,
                            cv: cv.name,
                            post: values.post,

                            dp: dp.name
                        }
                        handleSubmit(formdata)


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
                                        <TextField label="Father,s Name" name="f_name" type="text" />
                                    </div>
                                    <div className="col-md-6  mb-3">
                                        <TextField label="Phone #" name="Phone" type="text" />
                                    </div>
                                    <div className="col-md-6  mb-3">
                                        <TextField label="Phone #" name="Phone2" type="text" />
                                    </div>
                                    <div className="col-md-6  mb-3">
                                        <TextField label="cnic #" name="cnic" type="text" />
                                    </div>
                                    <div className="col-md-6  mb-3">
                                        <TextField label="Date of Birth" name="dob" type="date" />
                                    </div>
                                    <div className="col-md-6  mb-3">
                                    <TextField label="Salary" name="salary" type="Number" />

                                    </div>
                                    <div className="col-md-6  mb-3">
                                    <TextField label="Post" name="post" type="text" />

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
                                   
                                    <div className="col-md-12  mb-3">
                                        <TextField label="Current Address" name="cAddress" type="text" />
                                    </div>
                                    <div className="col-md-6  mb-3">
                                        <div className="bx--file__container">
                                            <FileUploader
                                                accept={[
                                                    '.pdf',

                                                ]}
                                                buttonKind="primary"
                                                buttonLabel="Add CV"
                                                onChange={(e)=> setCv(e.target.files[0])}
                                                filenameStatus="edit"
                                                iconDescription="Clear file"
                                                labelDescription="only .pdf files "
                                                // labelTitle="Upload"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6  mb-3">
                                        <div className="bx--file__container">
                                            <FileUploader
                                                accept={[
                                                    '.jpg',
                                                    '.png'
                                                ]}
                                                onChange={(e)=> setDp(e.target.files[0])}
                                                buttonKind="primary"
                                                buttonLabel="Add DP"
                                                filenameStatus="edit"
                                                iconDescription="Clear file"
                                                labelDescription="only .jpg or .png files "
                                                // labelTitle="Upload"
                                            />
                                        </div>
                                    </div>
                                    <button className='btn btn-primary' type='submit'>Add</button>
                                </div>
                            </Form>
                        </div>
                    )}
                </Formik>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditStaff;
