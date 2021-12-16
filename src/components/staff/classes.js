import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select';
import { BiDetail } from 'react-icons/bi';

import { MdOtherHouses } from 'react-icons/md'
function Classess() {
  const theme = useSelector((state) => state.theme.value)
  const [search, setsearch] = useState()

  const [data, setdata] = useState([
    {
      "name": "Muhammad Abrar",
      "rollNo": "21501",
      "Father": "Israr Muhammad",
      "contact1": '03405216890',
      "contact2": '03405216890',
      "grade": '5th',
      "status": "Good",
      "address": "moh: redawan, po: maini, swabi kpk pakistan"
    },
    {
      "name": "Awais Rahman",
      "rollNo": "21502",
      "Father": "Saqib Khan",
      "contact1": '03122565987',
      "contact2": '03324565855',
      "grade": '5th',
      "address": "moh: redawan, po: maini, swabi kpk pakistan",
      "status": "Good"
    },
    {
      "rollNo": "21503",
      "name": "Noman Khan",
      "Father": "Ismail Khan",
      "contact1": '03126564987',
      "contact2": '032136547898',
      "grade": '5th',
      "address": "moh: redawan, po: maini, swabi kpk pakistan",
      "status": "Good"
    },
    {
      "rollNo": "21504",
      "name": "Wajid khan",
      "Father": "toseef Khan",
      "contact1": '03124249987',
      "contact2": '03124249987',
      "grade": '5th',
      "address": "moh: redawan, po: maini, swabi kpk pakistan",
      "status": "Good"
    }
  ])
  const [row, setrow] = useState(data)

  useEffect(() => {
    searchResult()
  }, [search]);
  const searchResult = async (e) => {
    if (search) {

      const results = data.filter(data =>
        data.name.toLowerCase().includes(search) 
        || data.Father.toLowerCase().includes(search) 
        || data.address.toLowerCase().includes(search) 
        || data.rollNo.toLowerCase().includes(search) 

      );
      console.log("result :", results)
      setrow(results);
    } else {
      setrow(data);
      console.log("row :", row)

    }

  }
  const handlesearch = event => {
    if (event.target.value) {
      setsearch(event.target.value);

    } else {
      setrow(data);
    }
  };
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (<>
    <div className={theme ? "card students-chart-card-dark " : "card students-chart-card "} >
      <div className="card-header bg-primary text-light">
        
            <p className={theme && "card-title-dark"} style={{ margin: 0 }}>Classess</p>
          




      </div>
      <div className="card-content p-2">


        <div className="table-responsive">

          <table className={!theme ? "table table-striped table-hover" : "table-striped table-hover table table-dark"}>
            <caption>Classess of  className 5th & session 2021</caption>
            <thead className="table-primary">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Grade</th>
                <th scope="col">Subject</th>
                <th scope="col">Time</th>
                <th scope="col">Sylubas</th>
              </tr>
            </thead>
            <tbody>
              {row.map((data, index) =>
                <tr key={index}><td scope="row">{index + 1}</td>
                  <td>
                  {data.grade}
                  </td>
                  <td>urdu
                  </td>
                  <td>8:30</td>
                  <td> <button
                  class="btn-icon btn-warning shadow"
                  style={{ marginRight: "1em" }}
                  data-toggle="popover"
                  aria-label="Attendance Details"
                  data-cooltipz-dir="bottom">
                  <BiDetail />
                </button></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>


    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

  </>
  );
}

export default Classess