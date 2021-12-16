
import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom';
import { Table,  Image, Modal } from 'react-bootstrap'
import moment from 'moment';
import { AiOutlineMenu, AiFillEdit, AiOutlineUserDelete, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import { Tooltip, Link, Button, Tag } from 'carbon-components-react';


function Exam(props) {
    const theme = useSelector((state) => state.theme.value)
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    var currentmonth = moment().months();
    console.log(currentmonth)
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
                    <div className=" " style={{ display: "flex", justifyContent: "space-between" }}>
                        Exam Detail


                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row-one" >
                    <p className="p-title" >Term:</p>
                    <p className="p-value" >{props.exam ? props.exam.Term:" 1st term"}</p>
                    <p className="p-title" >Session:</p>
                    <p className="p-value" >2021</p>
                </div>
                <div className="row-one" >
                    <p className="p-title" >Date:</p>
                    <p className="p-value" >{props.exam ? props.exam.Date:" 02-03-2021"}</p>
                    <p className="p-title" >Status:</p>
                    <p className="p-value" >pending</p>
                </div><br/>
                <div className="row-one" >
                    <p className="p-title" >Grads:</p>
                    <p className="p-value" >
                    <Tag type="red" title="Filter"> 5th </Tag>
<Tag type="magenta" title="Clear Filter" style={{ background: "#EEDE04" }}> 6th </Tag>
<Tag type="purple" title="Clear Filter"> 7th </Tag>
<Tag type="purple" title="Clear Filter"> 8th </Tag>
                       
                        </p>
                </div>
                <div className="row-one" >
                    <p className="p-title" >Discription:</p>
                    <p className="ps-3 text-secondary" > Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter</p>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
            <Button onClick={props.onHide}>Done</Button>
            <Button onClick={props.onHide}>Delete</Button>
            
                <Button onClick={props.onHide}>Edit</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Exam;
