import React, { useState, useEffect } from 'react';
import {  Dropdown, ButtonGroup, Button } from 'react-bootstrap'
import {GrAdd} from 'react-icons/gr'


import {AiOutlineClose} from 'react-icons/ai';
import moment from 'moment';
export const Organization = () => {
    const [data, setData] = useState([])

    const [Refresh, setRefresh] = useState(0)
    const [IsEntry, setIsEntry] = useState(0)


    return (
        <>
        <form>
  <div class="form-group mb-3">
    <label for="exampleInputEmail1">Title</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Title"/>
    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div className="row">
  <div class="form-group col-md-6 mb-3">
    <label for="exampleInputEmail1">Contact 1
    </label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Contact"/>
    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div class="form-group col-md-6 mb-3">
    <label for="exampleInputEmail1">Contact 2
    </label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Contact
    "/>
    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  </div>
  <div class="form-group mb-3">
    <label for="exampleInputEmail1">Address</label>
    <textarea type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Address"/>
    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>

  
  <button type="submit" class="btn btn-primary" disabled>Submit Changes</button>
</form>

        </>
    )
}
