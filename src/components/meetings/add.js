import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { Table, Button, Image, Modal } from "react-bootstrap";
import moment from "moment";

import {
  TextInput,
  TextArea,
  DatePickerInput,
  DatePicker,
} from "carbon-components-react";
import Select from "react-select";
import { Add32 } from "@carbon/icons-react";
import axios from "axios";

function Add(props) {
  const theme = useSelector((state) => state.theme.value);
  const options = [
    { value: "b-success", label: "success" },
    { value: "b-primary", label: "primary" },
    { value: "b-warning", label: "warning" },
    { value: "b-danger", label: "danger" }
    
  ];

  const customStyles = {
    border: "none",
    option: (provided, state) => ({
      ...provided,
      // borderBottom: '1px solid #888',
      backgroundColor: state.isSelected
        ? state.value == "b-warning"
          ? "#f4c414"
          : state.value == "b-primary"
          ? "#448bff"
          : state.value == "b-success"
          ? "#28a745"
          : state.value == "b-danger" && "#f54394"
        : "",
      // color: state.isSelected ? '#fff' : '#000',
      color: !state.isSelected
        ? state.value == "b-warning"
          ? "#f4c414"
          : state.value == "b-primary"
          ? "#448bff"
          : state.value == "b-success"
          ? "#28a745"
          : state.value == "b-danger" && "#f54394"
        : "#fff",

      padding: 20,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      //   border: "none"
      // width: "10rem",
      display: "flex",
      background: "#F4F4F4",

      borderBottom: "1px solid #888",
      // marginLeft:"1rem"
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };

  const [date, setdate] = useState();
const [title, settitle] = useState();
const [color, setcolor] = useState('b-primary');
const [note, setnote] = useState();
  const submitform = async (event) => {
    event.preventDefault();
    const data = {
      title,
      date,
      color,
      note
    }
    console.log(data);
    console.log("form submitting---");
    await axios
      .post("http://192.168.43.39:5000/api/meetings", 
       
        data)
      .then(function (response) {
        console.log(response);
        // props.refresh();
      })
      .catch(function (error) {
        console.log(error);
        // seterror(true);
      });
  };


  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={!theme ? " " : " "}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className=" ">Add Meetings and Appointments</div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={(event) => submitform(event)}>
          <TextInput
            labelText="Title"
            placeholder="Enter Title"
            className="mb-3"
            name="title"
            required
            onChange={(e) => settitle(e.target.value)}
          />

          <div className="row mb-3">
            <div className="col-md-6">
              <p className="text-sm text-muted mb-1">Date</p>
              <input
                className="dateinput"
                type="date"
                value={date}
                onChange={(e) => setdate(e.target.value)}
                style={{ width: "100%" }}
                required
              />
            </div>

            <div className="col-md-6">
              <p className="text-sm text-muted mb-1">Color</p>
              <Select
                className="Select-input mt-2"
                placeholder="Select color"
                styles={customStyles}
                options={options}
                
                defaultValue={options[1]}
                onChange={(e) => setcolor(e.value)}
                name="color"
              />
            </div>
          </div>

          <TextArea
            labelText="Note"
            placeholder="Enter Notes"
            type="textarea"
            className="mb-3"
            name="note"
            required
            onChange={(e) => setnote(e.target.value)}
          />
          <Button type="submit">save</Button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Add;
