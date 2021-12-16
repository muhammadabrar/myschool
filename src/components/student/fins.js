import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select';
import { BiDetail, BiCommentAdd } from 'react-icons/bi';
import { IoMdPersonAdd } from 'react-icons/io'

import { MdOtherHouses } from 'react-icons/md'
function Fins() {
  const theme = useSelector((state) => state.theme.value)
  const [search, setsearch] = useState()

  const [data, setdata] = useState([{}, {}, {}])
  const [row, setrow] = useState(data)


  return (<>
    <div className={theme ? "card students-chart-card-dark " : "card students-chart-card "} >
      <div className="card-header bg-primary text-light">
        

            <div className="row">
                    <div className="col-md-4">
                    <p className={theme && "card-title-dark"} style={{ margin: 0 }}>Complaints</p>

                    </div>
                    <div className="col-md-8">
                    <button class="btn-icon bg-danger  float-end shadow"  data-toggle="popover"  aria-label="Add New Complaint" data-cooltipz-dir="bottom"><BiCommentAdd/></button>
                    </div>
                </div>



      </div>
      <div className="card-content p-2">


        <div className="table-responsive">

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

export default Fins