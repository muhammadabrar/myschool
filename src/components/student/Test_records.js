import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select';
import { BiDetail } from 'react-icons/bi';

import { MdOtherHouses } from 'react-icons/md'
function Test_records() {
  const theme = useSelector((state) => state.theme.value)
  const [search, setsearch] = useState()

  const [data, setdata] = useState([{}, {}, {}])
  const [row, setrow] = useState(data)


  return (<>
    <div className={theme ? "card students-chart-card-dark " : "card students-chart-card "} >
      <div className="card-header bg-primary text-light">
        
            <p className={theme && "card-title-dark"} style={{ margin: 0 }}>Test Records</p>
          




      </div>
      <div className="card-content p-2">


        <div className="table-responsive">

          <table className={!theme ? "table table-striped table-hover" : "table-striped table-hover table table-dark"}>
            <caption>Test Records</caption>
            <thead className="table-primary">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Grade</th>
                <th scope="col">Subject</th>
                <th scope="col">Date</th>
                <th scope="col">result</th>
              </tr>
            </thead>
            <tbody>
              {row.map((data, index) =>
                <tr key={index}><td scope="row">{index + 1}</td>
                  <td>
                  5th
                  </td>
                  <td>urdu
                  </td>
                  <td>November 19, 2021</td>
                  <td>9/10</td>

                  {/* <td> <button
                  class="btn-icon btn-warning shadow"
                  style={{ marginRight: "1em" }}
                  data-toggle="popover"
                  aria-label="Attendance Details"
                  data-cooltipz-dir="bottom">
                  <BiDetail />
                </button></td> */}
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>


    </div>

  </>
  );
}

export default Test_records