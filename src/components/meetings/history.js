
import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom';
import { Table, Button, Image, Modal } from 'react-bootstrap'
import moment from 'moment';
import { AiOutlineMenu, AiFillEdit, AiOutlineUserDelete, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
function History(props) {
  const theme = useSelector((state) => state.theme.value)
const months = ["Jan" ,"Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct" ,"Nov" ,"Dec"]
const [startDate, setStartDate] = useState('2021-11-23');
const [Date, setDate] = useState([]);
const [MeetingTabs, setMeetingTabs] = useState('today');


var handledate = (e) =>{
    setStartDate(e.target.value)
    setDate(e.target.value.split('-'))

}
console.log("date:" + startDate +", " + Date[0])
  return (
   <>
             <input type="date" min="2017-04-01" max="2017-04-30" aria-label="First name"  value={startDate} onChange={(e)=> handledate(e)} className={`form-control mt-2 shadow-none ${theme && "bg-info text-light"}`} />

<div class="timeline  block mb-4">
<div class="tl-item">
    <div class="tl-dot b-warning"></div>
    <div class="tl-content">
        <div class="">fasfasfsfsaion</div>
        <p className="text-secondary">dsdw</p>
        <div class="tl-date text-muted mt-1">13 june 18</div>
    </div>
</div>
<div class="tl-item">
    <div class="tl-dot b-primary"></div>
    <div class="tl-content">
        <div class="">Do you know how Google search works.</div>
        <div class="tl-date text-muted mt-1">45 minutes ago</div>
    </div>
</div>
<div class="tl-item">
    <div class="tl-dot b-danger"></div>
    <div class="tl-content">
        <div class="">Thanks to <a href="#" data-abc="true">@apple</a>, for iphone 7</div>
        <div class="tl-date text-muted mt-1">1 day ago</div>
    </div>
</div>
<div class="tl-item">
    <div class="tl-dot b-danger"></div>
    <div class="tl-content">
        <div class="">Order placed <a href="#" data-abc="true">@eBay</a> you will get your products</div>
        <div class="tl-date text-muted mt-1">1 Week ago</div>
    </div>
</div>
<div class="tl-item">
    <div class="tl-dot b-warning"></div>
    <div class="tl-content">
        <div class="">Learn how to use  to discover vital information about your readers.</div>
        <div class="tl-date text-muted mt-1">3 days ago</div>
    </div>
</div>
<div class="tl-item">
    <div class="tl-dot b-warning"></div>
    <div class="tl-content">
        <div class="">Learn how to use  to discover vital information about your readers.</div>
        <div class="tl-date text-muted mt-1">3 days ago</div>
    </div>
</div>
<div class="tl-item">
    <div class="tl-dot " style={{borderColor: "red"}}></div>
    <div class="tl-content">
        <div class="">Learn how to use  to discover vital information about your readers.</div>
        <div class="tl-date text-muted mt-1">3 days ago</div>
    </div>
</div>
<div class="tl-item">
    <div class="tl-dot "></div>
    <div class="tl-content">
        <div class="">Learn how to use  to discover vital information about your readers.</div>
        <div class="tl-date text-muted mt-1">3 days ago</div>
    </div>
</div>
</div></>


  
  );
}

export default History;
