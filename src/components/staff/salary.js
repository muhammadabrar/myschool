
import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom';
import { Table, Button, Image, Modal } from 'react-bootstrap'
import moment from 'moment';
import { AiOutlineMenu, AiFillEdit, AiOutlineUserDelete, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'

function Salary(props) {
  const theme = useSelector((state) => state.theme.value)
const months = ["Jan" ,"Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct" ,"Nov" ,"Dec"]

var currentmonth = moment().months();
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
          <div className=" ">
            Salary Detail
            

          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>November 19, 2021</td>
              <td className="text-success">Taken</td>
              <td>
              <button class="btn-icon btn-danger shadow" style={{ marginLeft: "0.5em" }} data-toggle="popover" aria-label="Delete" data-cooltipz-dir="bottom"><AiOutlineClose /></button>
              </td>
            </tr>
            
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Salary;
