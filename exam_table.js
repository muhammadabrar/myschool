import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select';
import { IoMdPersonAdd } from 'react-icons/io'
import { BsClipboardData } from 'react-icons/bs'
import { AiOutlineSchedule, AiFillCloseCircle } from 'react-icons/ai'
import avater from '../cover.jpg';
import { BiDetail } from 'react-icons/bi';
import Exam from './Exams/Exam';
import { NavLink } from 'react-router-dom';
import { Tooltip, Link, Button, Tag } from 'carbon-components-react';
function Exams() {
    const theme = useSelector((state) => state.theme.value)
    const [IsExam, setIsExam] = useState(false)
    const [ExamDetail, setExamDetail] = useState(false)
    const examdetail = (exam) => {
        setExamDetail(exam)
        setIsExam(true)
    }

    const [data, setdata] = useState([
        {
            "Term": "1st Term",
            "Date": "02-05-2021",
        },
        {
            "Term": "2nd Term",
            "Date": "02-03-2021",
        },
        {
            "Term": "final",
            "Date": "02-06-2021",
        },
    ])


    return (<>
        <div className={theme ? "card students-chart-card-dark " : "card students-chart-card "} >
            <div className="card-header bg-primary text-light" >
                <div className="row">
                    <div className="col-md-4 pt-2">
                        <p className={theme && "card-title-dark"} style={{ margin: 0 }}>Exams <button class="btn-icon ms-2 bg-info shadow" data-toggle="popover" aria-label="Add New Staff" data-cooltipz-dir="bottom"><IoMdPersonAdd /></button></p>
                    </div>
                    <div className="col-md-8">
                        <form className="pt-2">
                            <div className="input-group shadow">
                                <select className={`form-control shadow-none ${theme && "bg-dark text-light"}`} aria-label="Default select example">
                                    <option selected>2021</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <select className={`form-control shadow-none ${theme && "bg-dark text-light"}`} aria-label="Default select example">
                                    <option selected>Pending</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            <div className="card-content p-2">
                {data.map((data, index) =>
                    <div className={`bx--grid exam-row  ${theme && "bg-dark"}`}>
                        
                        <div>
                            <NavLink className={!theme ? "navLink text-dark" : "navLink text-light"} to={`exam/${index + 1}`}>
                                {data.Term} <br />{data.Date}
                            </NavLink>
                        </div>
                        <div> 5th to 8th

                        <Tooltip
      direction="bottom"
      tabIndex={0}
    >
      <Tag type="red" title="Filter"> 5th </Tag>
<Tag type="magenta" title="Clear Filter"> 6th </Tag>
<Tag type="purple" title="Clear Filter"> 7th </Tag>
<Tag type="purple" title="Clear Filter"> 8th </Tag>

      <div className="bx--tooltip__footer">
        <Button size="small">
          Create
        </Button>
      </div>
    </Tooltip>
                        </div>
                        <div>
                        <button className={`btn-icon float-end btn-info m-1  bordered   shadow`}
                         onClick={() => examdetail(data)} data-toggle="popover" aria-label="Details" data-cooltipz-dir="bottom"> <BiDetail /></button>
                        </div>
                    </div>
                )}
            </div>
            
            <Exam show={IsExam} exam={ExamDetail} onHide={() => setIsExam(false)} />


        </div>
    </>
    );
}

export default Exams