import React, { useState, useEffect } from 'react';
import {  Dropdown, ButtonGroup, Button } from 'react-bootstrap'


import {AiOutlineClose} from 'react-icons/ai';
import moment from 'moment';
export const Session = () => {
    const [data, setData] = useState([])

    const [Refresh, setRefresh] = useState(0)
    const [IsEntry, setIsEntry] = useState(0)


    return (
        <>
        <Dropdown as={ButtonGroup}>
            current Session: {" " }
    <Button disabled variant="success">2021</Button>
    <Dropdown.Toggle className="shadow" split variant="success" id="dropdown-custom-2" />
    <Dropdown.Menu >
    <div className="px-2">2021
     <i className=" float-end text-danger" 
     onClick={()=> setRefresh(Refresh + 1)}
     data-toggle="popover" aria-label="Delete session" data-cooltipz-dir="bottom"><AiOutlineClose /></i>
    </div>
    <Dropdown.Divider />
    <div className="px-2">2021
     <i className=" float-end text-danger" 
     onClick={()=> setRefresh(Refresh + 1)}
     data-toggle="popover" aria-label="Delete session" data-cooltipz-dir="bottom"><AiOutlineClose /></i>
    </div>
    <Dropdown.Divider />
    <div className="px-2">2021
     <i className=" float-end text-danger" 
     onClick={()=> setRefresh(Refresh + 1)}
     data-toggle="popover" aria-label="Delete session" data-cooltipz-dir="bottom"><AiOutlineClose /></i>
    </div>
    </Dropdown.Menu>
  </Dropdown>
  <br></br>
  <br></br>

  <Dropdown.Divider />

      
        </>
    )
}
