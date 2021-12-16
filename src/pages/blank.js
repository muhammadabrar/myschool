import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom';
import { currentTitle } from '../store/title'

function ExamDetail() {
    const { examid } = useParams()
    const dispatch = useDispatch()
    const theme = useSelector((state) => state.theme.value)
    useEffect(() => {
        // Update the document title using the browser API
        dispatch(currentTitle("Exam Details"))
    }, []);
    return (<>
        <div className={!theme ? "page-content " : "page-content-dark"}>
            <h1>ExamDetail {examid}</h1>
        </div>
    </>
    );
}

export default ExamDetail