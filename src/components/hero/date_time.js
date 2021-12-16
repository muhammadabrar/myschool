import { useEffect, useState } from "react";
import moment from 'moment';
// import {BiTime} from 'react-icons/bi'

function Time() {
    const [test, setTest] = useState(moment().format('dddd, MMMM Do, YYYY, h:mm:ss a'))

    // var [today, settoday] = useState(new Date())
    // var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + '   ' + days[today.getDay()];
    // var sec = today.getSeconds()
    // sec = sec <= 9 ? '0' + sec : sec
    // var hours = today.getHours();
    // var AmOrPm = hours >= 12 ? 'pm' : 'am';
    // hours = (hours % 12) || 12;
    // var min = today.getMinutes();
    // min = min <= 9 ? '0' + min : min
    // const [time, settime] = useState(hours + ' : ' + min + " " + AmOrPm)
    // useEffect(() => {
    //     settime(hours + ' : ' + min + " " + sec + " " + AmOrPm)
    // }, [sec]);
    useEffect(() => {
        setInterval(() => {
            setTest(moment().format('dddd, MMMM D, YYYY, h:mm:ss a'))
        }, 1000);
    }, [test]);
    return (
        <>
            {/* <BiTime /> */}
             {test}
        </>
    )
}
export default Time