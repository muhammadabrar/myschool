import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { Modal } from "react-bootstrap";
import {  SelectItem, TextInput, DatePickerInput, DatePicker, TimePickerSelect, TimePicker } from "carbon-components-react";
import Select from 'react-select'
function Add_Class(props) {
  const theme = useSelector((state) => state.theme.value);
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  const customStyles = {
      border:"none",
    // option: (provided, state) => ({
    //   ...provided,
    //   borderBottom: '1px dotted pink',
    //   color: state.isSelected ? 'red' : 'blue',
    //   padding: 20,
    // }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
    //   border: "none"
    width: "100%",
    display: "flex",
    background: "#000",
    borderBottom: '1px solid #888',

    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={!theme ? " " : " "}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div
            className=" "
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            Add Class
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <div className="row">
        <div className="col-md-6">
          <TextInput
            
            id="test2"
            invalidText="A valid value is required"
            labelText="Text input label"
            placeholder="Placeholder text"
            list="browsers"
            type={"color"}
          />
          <datalist id="browsers">
            <option value="Edge" />
            <option value="Edge" />
            <option value="Edge" />
            <option value="Edge" />
            <option value="Edge" />
          </datalist>
        </div>
        <div className="col-md-6">
          <TextInput
            
            id="test2"
            invalidText="A valid value is required"
            labelText="Text input label"
            placeholder="Placeholder text"
            list="browsers"
          />
          <datalist id="browsers">
            <option value="Edge" />
            <option value="Edge" />
            <option value="Edge" />
            <option value="Edge" />
            <option value="Edge" />
          </datalist>
        </div>
        </div>
       
        <div className="col-md-12 mt-3">
        <Select className="Select-input" styles={customStyles} options={options} />
        </div>
        <div className="col-md-6 mt-3">
        <TimePicker id="time-picker" >
     <TimePickerSelect id="time-picker-select-1">
       <SelectItem value="AM" text="AM" />
       <SelectItem value="PM" text="PM" />
     </TimePickerSelect>
   </TimePicker>
        </div>
        
      </Modal.Body>
      <Modal.Footer>
        <button onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}

export default Add_Class;
