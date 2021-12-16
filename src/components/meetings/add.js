
import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom';
import { Table, Button, Image, Modal } from 'react-bootstrap'
import moment from 'moment';
import { AiOutlineMenu, AiFillEdit, AiOutlineUserDelete, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'

function Add(props) {
  const theme = useSelector((state) => state.theme.value)
const months = ["Jan" ,"Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct" ,"Nov" ,"Dec"]

var currentmonth = moment().months();
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={!theme ? " " : " "}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className=" ">
            Add Meetings and Appointments
            

          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Add;
