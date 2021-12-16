import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select';
import { IoMdPersonAdd } from 'react-icons/io'
import avater from '../cover.jpg';
import { NavLink } from 'react-router-dom';
import AddStaff from './staff/add'
function Staff() {
    const theme = useSelector((state) => state.theme.value)
    const [data, setdata] = useState([
        {
            "name": "Muhammad Abrar",
            "post": "principle",
            "contact1": '03405216890',
            "contact2": '03405216890',
            "gender": "Male",
        },
        {
            "name": "Awais Rahman",
            "post": "PTI",
            "contact1": '03122565987',
            "contact2": '03324565855',
            "gender": "Male"
        },
        {
            "name": "Noman Khan",
            "post": "Teacher",
            "contact1": '03126564987',
            "contact2": '032136547898',
            "gender": "Male"
        },
        {
            "name": "Wajid khan",
            "post": "Teacher",
            "contact1": '03124249987',
            "contact2": '03124249987',
            "gender": "Male"
        }
    ])
    const [isAdd, setisAdd] = useState(false)
    const [refresh, setrefresh] = useState(1)



    return (<>
        <div className={theme ? "card students-chart-card-dark " : "card students-chart-card "} >
            <div className="card-header bg-primary text-light">
                <div className="row">
                    <div className="col-md-4 pt-3">
                        <p className={theme && "card-title-dark"} style={{ margin: 0 }}>Staff <small>(current Staff)</small></p>
                    </div>
                    <div className="col-md-8">
                        <button class="btn-icon bg-info mt-2 float-end shadow" onClick={()=>setisAdd(true)} data-toggle="popover" aria-label="Add New Staff" data-cooltipz-dir="bottom"><IoMdPersonAdd /></button>
                    </div>
                </div>
            </div>

            <div className="card-content p-2">
                {data.map((data, index) =>
                    <div className={`bx--grid student-row  ${theme && "bg-dark"}`}>
                        <div className="c2">
                            <NavLink className={!theme ? "navLink text-dark" : "navLink text-light"} to={`staff/${index + 1}`}>
                                <img src={avater} className="avater" alt="..." />
                            </NavLink>
                        </div>
                        <div className="c3">
                            <NavLink className={!theme ? "navLink text-dark" : "navLink text-light"} to={`staff/${index + 1}`}>
                                {data.name} <br />{data.post}
                            </NavLink>
                        </div>
                        <div className="c7">{data.contact1}<br />{data.contact2}</div>
                        <div className="c5">{data.gender}</div>
                    </div>
                )}
            </div>



        </div>
        <AddStaff show={isAdd} onHide={() => setisAdd(false)} refresh={()=> setrefresh(refresh + 1)}/>
    </>
    );
}

export default Staff