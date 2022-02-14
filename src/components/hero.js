import React, { useState } from "react";
import Darkmode from "./hero/darkmode";
import Time from "./hero/date_time";
import { useSelector } from "react-redux";

import { Outlet } from "react-router";
import { Navbar, Nav, Offcanvas } from "react-bootstrap";

import { Session } from "./setting/session";
import { AddSession } from "./setting/addsession";
import { Organization } from "./setting/organization";
import Add from "./meetings/add";
import Meetings from "./meetings/meetings";
import History from "./meetings/history";
import {
  Finance32,
  Finance16,
  User16,
  Partnership32,
  Settings32,
  Settings16,
  AddFilled32,
  Logout16,
  Partnership16
} from "@carbon/icons-react";
import { isMobile } from "react-device-detect";
import name from "../cover.jpg";
import { OverflowMenuItem } from "carbon-components-react";
function Hero() {
  const title = useSelector((state) => state.title.value);
  const theme = useSelector((state) => state.theme.value);
  const [IsMenu, setIsMenu] = useState(false);
  const [IsSetting, setIsSetting] = useState(false);
  const [IsSessionEntry, setIsSessionEntry] = useState(false);
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
  const IsMenuMenu = () => setIsMenu(!IsMenu);

  const [Isdropdown, setIsDropdown] = useState(false);

  return (
    <>
      <div className="top-navbar">
        <div className={"text-white"}>
          <Time />
        </div>
      </div>

      {isMobile ? (
        <div className={`navbar sticky-top ${!theme ? "bg-light" : "bg-dark"}`}>
          <>
            <Darkmode />
            <div className={!theme ? "text-dark" : "text-white"}>
              <h3 className="page-title">{title}</h3>
            </div>
            <div className="navbar-items">
              {/* <div className="nav-btn">
              <button
                className="btn-icon shadow bg-secondary"
                onClick={IsSettingShow}
                data-toggle="popover"
                aria-label="Settings"
                data-cooltipz-dir="bottom"
              >
                <Settings32 />{" "}
              </button>
            </div>
            <div className="nav-btn">
              <button
                className="btn-icon shadow bg-info"
                onClick={IsMeetShow}
                data-toggle="popover"
                aria-label="Meetings and Appointments"
                data-cooltipz-dir="bottom"
              >
                <Partnership32 />
              </button>
            </div> */}
              {/* <div className="nav-btn">
                            <button className="btn-icon shadow bg-warning" onClick={IsHistoryShow} data-toggle="popover" aria-label="Activities" data-cooltipz-dir="bottom"><AiOutlineHistory /></button>
                        </div> */}

              <div className="nav-btn">
                <img
                  className="user-avatar shadow"
                  onClick={IsMenuMenu}
                  src={name}
                />
                {IsMenu && (
                  <>
                  <div className="overlay" onClick={IsMenuMenu}></div>
                  <div className="user-dropdown-menu">
                    <OverflowMenuItem
                      className="dropdown-menu-item"
                      itemText={"Profile"}
                      itemText={
                        <>
                          <User16 /> Profile
                        </>
                      }
                      href="#"
                    />
                    <OverflowMenuItem
                      className="dropdown-menu-item"
                      itemText={
                        <>
                          <Settings16 /> Setting
                        </>
                      }
                      onClick={IsSettingShow}
                      href="#"
                    />
                    <OverflowMenuItem
                      className="dropdown-menu-item"
                      onClick={IsMeetShow}
                      itemText={
                        <>
                          <Partnership16 /> Meetings
                        </>
                      }
                      href="#"
                    />
                    <OverflowMenuItem
                      className="dropdown-menu-item"
                      itemText={
                        <>
                          <Finance16 /> Finance
                        </>
                      }
                      href="#"
                    />

                    <OverflowMenuItem
                      itemText={
                        <>
                          <Logout16 /> Log out
                        </>
                      }
                      hasDivider
                    />
                  </div>
                  </>
                )}
              </div>
            </div>
          </>
        </div>
      ) : (
        <div className={`navbar sticky-top ${!theme ? "bg-light" : "bg-dark"}`}>
          <>
            <div className={!theme ? "text-dark" : "text-white"}>
              <h3 className="page-title">{title}</h3>
            </div>
            <div className="navbar-items">
              <Darkmode />

              <div className="nav-btn">
                <button
                  className="btn-icon shadow bg-info"
                  onClick={IsMeetShow}
                
                >
                    {/* Meetings and Appointments */}
                  <Partnership32 />
                </button>
              </div>

              <div className="nav-btn">
                <img
                  className="user-avatar shadow"
                  onClick={IsMenuMenu}
                  src={name}
                />
                {IsMenu && (
                  <div className="user-dropdown-menu">
                    <OverflowMenuItem
                      className="dropdown-menu-item"
                      itemText={"Profile"}
                      itemText={
                        <>
                          <User16 /> Profile
                        </>
                      }
                      href="#"
                    />
                    <OverflowMenuItem
                      className="dropdown-menu-item"
                      itemText={
                        <>
                          <Settings16 /> Setting
                        </>
                      }
                      onClick={IsSettingShow}
                    />
                    <OverflowMenuItem
                      className="dropdown-menu-item"
                      itemText={
                        <>
                          <Finance16 /> Finance
                        </>
                      }
                      href="#"
                    />

                    <OverflowMenuItem
                      itemText={
                        <>
                          <Logout16 /> Log out
                        </>
                      }
                      hasDivider
                    />
                  </div>
                )}
              </div>
            </div>
          </>
        </div>
      )}

      <Offcanvas placement="end" show={IsSetting} onHide={CloseSetting}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Setting</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className="setting-title">
            Session{" "}
            <i
              className="pb-1"
              onClick={() => setIsSessionEntry(!IsSessionEntry)}
              data-toggle="popover"
              aria-label="Add new session"
              data-cooltipz-dir="bottom"
            >
              <AddFilled32 />
            </i>
          </p>
          {IsSessionEntry && <AddSession />}
          <Session />
          <p className="setting-title">Organization Setting </p>
          <Organization />
        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas placement="start" show={IsMeet} onHide={CloseMeet}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            Meetings and Appointments{" "}
            <i
              className="pb-1"
              onClick={() => setIsAddMeet(true)}
            >
              <AddFilled32 />
            </i>
          </Offcanvas.Title>
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
