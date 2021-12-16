import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select';
import { BiDetail } from 'react-icons/bi';
import { IoMdPersonAdd } from 'react-icons/io'
import { ListGroup } from 'react-bootstrap'

import { MdOtherHouses } from 'react-icons/md'
function Fins() {
  const theme = useSelector((state) => state.theme.value)
  const [search, setsearch] = useState()

  const [data, setdata] = useState([{}, {}, {}])
  const [row, setrow] = useState(data)


  return (<>
    <div className={theme ? "card students-chart-card-dark " : "card students-chart-card "} >
      <div className="card-header bg-primary text-light">
        

                    <p className={theme && "card-title-dark"} style={{ margin: 0 }}>Results</p>

                



      </div>
      <div className="card-content row">

<div className="col-md-3">
<ListGroup className={`std_exam-list ${theme && "bg-dark text-light"}`}>
    <ListGroup.Item className={`std_exam-list-item  ${theme && "bg-dark text-light"}`} action >
    1st Term<br />
      <small className="ref-value">02-06-2021</small>
                                       
    </ListGroup.Item>
    <ListGroup.Item className={`std_exam-list-item  ${theme && "bg-dark text-light"}`} action active>
    1st Term<br />
      <small className="ref-value">02-06-2021</small>
    </ListGroup.Item>
    <ListGroup.Item className={`std_exam-list-item  ${theme && "bg-dark text-light"}`} action >
    1st Term<br />
      <small className="ref-value">02-06-2021</small>
    </ListGroup.Item>
  </ListGroup>
</div>
<div className="col-md-9 m-0 p-0">
<div className="table-responsive">

          <table className={!theme ? "table table-striped table-hover" : "table-striped table-hover table table-dark"}>
            <caption>Test Records</caption>
            <thead className="table-primary">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Subject</th>
                <th scope="col">Total</th>
                <th scope="col">Obt</th>
              </tr>
            </thead>
            <tbody>
              {row.map((data, index) =>
                <tr key={index}><td scope="row">{index + 1}</td>
                  <td>
                  urdu
                  </td>
                  <td>100
                  </td>
                  <td>98</td>

                 {/* <td> <button
                  class="btn-icon btn-warning shadow"
                  style={{ marginRight: "1em" }}
                  data-toggle="popover"
                  aria-label="Attendance Details"
                  data-cooltipz-dir="bottom">
                  <BiDetail />
                </button></td>  */}
                </tr>
              )}
              <tr >
              <td>
                  </td>
                  <td>
                  300
                  </td>
                  <td>294
                  </td>
                  <td>98</td>

                 {/* <td> <button
                  class="btn-icon btn-warning shadow"
                  style={{ marginRight: "1em" }}
                  data-toggle="popover"
                  aria-label="Attendance Details"
                  data-cooltipz-dir="bottom">
                  <BiDetail />
                </button></td>  */}
                </tr>
            </tbody>
          </table>
        </div>
</div>





        {/* <div className="table-responsive">

          <table className={!theme ? "table table-striped table-hover" : "table-striped table-hover table table-dark"}>
            <caption>Test Records</caption>
            <thead className="table-primary">
              <tr>
                <th scope="col">#</th>
                <th scope="col">reason</th>
                <th scope="col">Fine</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {row.map((data, index) =>
                <tr key={index}><td scope="row">{index + 1}</td>
                  <td>
                  Absent
                  </td>
                  <td>Rs. 20
                  </td>
                  <td>November 19, 2021</td>

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
        </div> */}

      </div>


    </div>

  </>
  );
}

export default Fins