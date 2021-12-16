import React, { useState, useEffect } from 'react';
import {  Dropdown, ButtonGroup, Button } from 'react-bootstrap'
import {GrAdd} from 'react-icons/gr'


import {AiOutlineClose} from 'react-icons/ai';
import moment from 'moment';
export const AddSession = () => {
    const [data, setData] = useState([])

    const [Refresh, setRefresh] = useState(0)
    const [IsEntry, setIsEntry] = useState(0)


    return (
        <>
        <div className="input-group shadow mb-2">
                <input type="text"aria-label="First name" placeholder="Add New Session" className={`form-control shadow-none`} />
                <button className={`input-group-text `} data-toggle="popover"  aria-label="Add new session" data-cooltipz-dir="bottom"><GrAdd /></button>
              </div>

        </>
    )
}
