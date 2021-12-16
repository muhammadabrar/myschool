import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Breadcrumb } from 'react-bootstrap'


function Cbreadcrumb(props) {

  return (<>
   
   <Breadcrumb>
  <Breadcrumb.Item >
  <NavLink className="navLink" to="/">Dashboard</NavLink></Breadcrumb.Item>
  
  <Breadcrumb.Item active>{props.goto}</Breadcrumb.Item>
</Breadcrumb>
        </>
  );
}

export default Cbreadcrumb
