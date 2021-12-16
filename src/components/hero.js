import React, { useState } from 'react';
import Darkmode from './hero/darkmode';
import Time from './hero/date_time';
import { useSelector } from 'react-redux'

import { Outlet } from 'react-router';
import { Navbar, Nav, Offcanvas} from 'react-bootstrap'


import { Session } from './setting/session';
import { AddSession } from './setting/addsession';
import { Organization } from './setting/organization';
import Add from './meetings/add';
import Meetings from './meetings/meetings';
import History from './meetings/history';
import { Finance32, Partnership32, Settings32, AddFilled32 } from '@carbon/icons-react';
function Hero() {
    const title = useSelector((state) => state.title.value)
    const theme = useSelector((state) => state.theme.value)
    const [IsMenu, setIsMenu] = useState(false);
    const [IsSetting, setIsSetting] = useState(false);
    const [IsSessionEntry, setIsSessionEntry] = useState(false)
    const [IsMeet, setIsMeet] = useState(false);
    const [IsHistory, setIsHistory] = useState(false);

    const [IsAddMeet, setIsAddMeet] = useState(false);

    const CloseHistory = () => setIsHistory(false);
    const IsHistoryShow = () => setIsHistory(true);

    const CloseMeet = () => setIsMeet(false);
    const IsMeetShow = () => setIsMeet(true);
    const CloseSetting = () => setIsSetting(false);
    const IsSettingShow = () => setIsSetting(true);

    const CloseMenu = () => setIsMenu(false);
    const IsMenuMenu = () => setIsMenu(true);

    const [Isdropdown, setIsDropdown] = useState(false)

    return (
        <>
            <Navbar className="top-nav fixed-top" bg={!theme ? "light" : "dark"} expand="lg">
                <>
                    <Navbar.Brand className={!theme ? "text-dark" : "text-white"} >{title}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto  justify-content-center text-light">

                        </Nav>
                        <Nav.Link className={!theme ? "text-dark" : "text-white"}><Time /></Nav.Link>
                        <Darkmode />
                        <div className="nav-btn">
                            <button className="btn-icon shadow bg-secondary" onClick={IsSettingShow} data-toggle="popover" aria-label="Settings" data-cooltipz-dir="bottom"><Settings32 /> </button>
                        </div>
                        <div className="nav-btn">
                            <button className="btn-icon shadow bg-info" onClick={IsMeetShow} data-toggle="popover" aria-label="Meetings and Appointments" data-cooltipz-dir="bottom"><Partnership32 /></button>
                        </div>
                        {/* <div className="nav-btn">
                            <button className="btn-icon shadow bg-warning" onClick={IsHistoryShow} data-toggle="popover" aria-label="Activities" data-cooltipz-dir="bottom"><AiOutlineHistory /></button>
                        </div> */}
                        <div className="nav-btn">
                            <button className="btn-icon shadow bg-primary" onClick={IsMenuMenu} data-toggle="popover" aria-label="Finance" data-cooltipz-dir="bottom"><Finance32 /></button>
                        </div>
                    </Navbar.Collapse>
                </>
            </Navbar>
            {/* <Offcanvas placement="end" show={IsMenu} onHide={CloseMenu}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                    <p ><Badge bg="secondary" data-toggle="popover" aria-label="Session" data-cooltipz-dir="bottom">2021</Badge></p>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    <div className="sidenav">
                        <NavLink to="/"  className={isActive => (isActive ? " navLinkActives" : "navLink")} end>Dashboard</NavLink>
                        <button className={`dropdown-btn ${Isdropdown && "active"}`} onClick={() => setIsDropdown(!Isdropdown)}>Students
                            <i className="fa fa-caret-down"></i>
                        </button>
                        {Isdropdown && <div className="dropdown-container">
                            <NavLink to="/admission" className=" navLink" style={{ textDecoration: "none" }} end>Admission</NavLink>
                            <NavLink to="/Withdrawalstudent" className=" navLink" end>Withdrawal Students</NavLink>
                            <NavLink to="/" className="navLink" end>Test record</NavLink>
                            <NavLink to="/" className="navLink" end>Attandance</NavLink>
                        </div>}
                        <NavLink to="/classes" className="navLink" end> Classes</NavLink>
                        <NavLink to="/studennt" className="navLink" end>Finance</NavLink>
                    </div>
                </Offcanvas.Body>
            </Offcanvas> */}

            <Offcanvas placement="end" show={IsSetting} onHide={CloseSetting}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Setting</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    <p className="setting-title">Session <i className="pb-1"
                        onClick={() => setIsSessionEntry(!IsSessionEntry)}
                        data-toggle="popover" aria-label="Add new session" data-cooltipz-dir="bottom"><AddFilled32 /></i>
                    </p>
                    {IsSessionEntry && <AddSession />}
                    <Session />
                    <p className="setting-title">Organization Setting </p>
                    <Organization />

                </Offcanvas.Body>
            </Offcanvas>




            <Offcanvas placement="start" show={IsMeet} onHide={CloseMeet}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Meetings and Appointments  <i className="pb-1"
                        onClick={() => setIsAddMeet(true)}
                        data-toggle="popover" aria-label="Add Meetings or Appointments" data-cooltipz-dir="bottom"><AddFilled32 /></i></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    <Meetings IsAddMeet={IsAddMeet} />
                </Offcanvas.Body>
            </Offcanvas>
            {/* <Offcanvas placement="start" show={IsHistory} onHide={CloseHistory}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Activities</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    <History />
                </Offcanvas.Body>
            </Offcanvas> */}
            <Add show={IsAddMeet} onHide={() => setIsAddMeet(false)} />

            <Outlet />
        </>
    );
}

export default Hero;
