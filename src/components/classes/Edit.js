import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { Modal } from "react-bootstrap";
import {
  SelectItem,
  TextInput,
  DatePickerInput,
  DatePicker,
  TimePickerSelect,
  TimePicker,
} from "carbon-components-react";
import Select from "react-select";
function Edit_Class(props) {
  const theme = useSelector((state) => state.theme.value);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const customStyles = {
    border: "none",
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
      background: "#F4F4F4",
      borderBottom: "1px solid #888",
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };
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
            Edit Class
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-md-6">
            <TextInput
            //   invalidText="A valid value is required"
              labelText="Grade"
              placeholder="Enter Grade"
              list="Grade"
            />
            <datalist id="Grade">
              <option value="5th" />
              <option value="6th" />
              <option value="7th" />
              <option value="8th" />
              <option value="9th" />
            </datalist>
          </div>
          <div className="col-md-6">
            <TextInput
              labelText="Subject"
              placeholder="Enter Subject"
              list="Subject"
            />
            <datalist id="Subject">
              <option value="Urdu" />
              <option value="Urdu" />
              <option value="Urdu" />
              <option value="EUrdudge" />
              <option value="Urdu" />
            </datalist>
          </div>
        </div>

        <div className="col-md-12 mt-3">
            Teacher
          <Select
            className="Select-input"
            styles={customStyles}
            options={options}
          />
        </div>
        <div className="row">
        <div className="col-md-6 mt-3">
          <TimePicker id="time-picker"  labelText="Time">
            <TimePickerSelect id="time-picker-select-1">
              <SelectItem value="AM" text="AM" />
              <SelectItem value="PM" text="PM" />
            </TimePickerSelect>
          </TimePicker>
        </div>
        
        <div className="col-md-6 mt-3">
        <TextInput
              labelText="Duration"
              placeholder="Enter Duration in minutes"
                type={"number"}
            />
        </div>
        </div>
        
        <div className="col-md-12 mt-3">
            <TextInput
              labelText="Color"
              type={"color"}
            />
          </div>
          <div className="col-md-12 mt-3">
          <button className="btn btn-sm btn-primary " onClick={props.onHide}>Save</button>

          </div>
          
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-sm btn-primary" onClick={props.onHide}>Close</button>

      </Modal.Footer>
    </Modal>
  );
}

export default Edit_Class;
