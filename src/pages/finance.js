import { Filter16 } from "@carbon/icons-react";
import { OverflowMenuItem } from "carbon-components-react";
import { OverflowMenu } from "carbon-components-react";
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { currentTitle } from "../store/title";
import avater from "../cover.jpg";
import { Renew16 } from "@carbon/icons-react";
import { Button } from "bootstrap";
import { Add16 } from "@carbon/icons-react";

function Finance() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);
  useEffect(() => {
    // Update the document title using the browser API
    dispatch(currentTitle("Finance"));
  }, []);
  return (
    <>
      <div className={!theme ? "page-content " : "page-content-dark"}>
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-3 finance-card">
              <div className="card-header finance-card-header">
                <p className="mt-1 ">
                  <b>Over All</b>
                </p>

                <OverflowMenu flipped="true" size="sm" className="MenuOverflow">
                  <OverflowMenuItem className="optionOne" itemText="Add Fee" />
                  <OverflowMenuItem
                    className="optionTwo"
                    itemText="Withdrawal Students"
                    requireTitle
                  />
                  <OverflowMenuItem itemText="Salary" />
                  <OverflowMenuItem itemText="Add Partner" hasDivider />
                </OverflowMenu>
              </div>
              <div className="card-body finance-card-body">
                <>
                  <div className="r-image">
                    <img src={avater} className="r-logo" alt="..." />
                  </div>
                  <div className="f-info">
                    <h4 className="f-info-title">Swabi College of Scinces (bamkhel)</h4>
                    <div className="f-info-price">
                      <h2 className="r-price">
                        Rs. 30k <small className="sub-price"></small>
                      </h2>
                      <div className="price-refresh bg-dark text-light">
                        <Renew16 />
                      </div>
                    </div>
                  </div>
                </>
              </div>
              <div className="card-footer">foother</div>
            </div>
          </div>
          <div className="col-md-6">
          <div className="card ">
              <div className="card-header finance-card-header">
                <p className="mt-1 ">
                  <b>Partners</b>
                </p>

                <Add16/>
              </div>
              <div className="card-body">
                <div className="partner">
                  <div className="r-image">
                    <img src={avater} className="p-logo" alt="..." />
                  </div>
                  <div className="p-info">
                    <h4 className="f-info-title">Muhammad Abrar</h4>
                    <div className="f-info-price">
                      <h2 className="r-price">
                        Rs. 30k 
                      </h2>
                      <div className="price-refresh bg-dark text-light">
                        <Renew16 />
                      </div>
                      
                    </div>
                    <small className="sub-price">Shares: 50%</small>
                  </div>
                  
                </div>
                <div className="partner">
                  <div className="r-image">
                    <img src={avater} className="p-logo" alt="..." />
                  </div>
                  <div className="p-info">
                    <h4 className="f-info-title">Muhammad Abrar</h4>
                    <div className="f-info-price">
                      <h2 className="r-price">
                        Rs. 30k 
                      </h2>
                      <div className="price-refresh bg-dark text-light">
                        <Renew16 />
                      </div>
                      
                    </div>
                    <small className="sub-price">Shares: 50%</small>
                  </div>
                  
                </div>
                
              </div>
              <div className="card-footer">foother</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Finance;
