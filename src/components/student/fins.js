import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
function Fins() {
  const theme = useSelector((state) => state.theme.value);
  const [search, setsearch] = useState();

  const [data, setdata] = useState([{}, {}, {}]);
  const [row, setrow] = useState(data);

  return (
    <>
      <div className="table-responsive">
        <table
          className={
            !theme
              ? "table table-striped table-hover"
              : "table-striped table-hover table table-dark"
          }
        >
          {/* <thead className="table-primary">
    <tr>
      <th scope="col">#</th>
      <th scope="col">reason</th>
      <th scope="col">Fine</th>
      <th scope="col">Date</th>
    </tr>
  </thead> */}

          {row.map((data, index) => (
            <>
              <tbody className="complaints">
                <tr key={index}>
                  <th>reason</th>
                  <td>Absent</td>

                  {/* <td> <button
        class="btn-icon btn-warning shadow"
        style={{ marginRight: "1em" }}
        data-toggle="popover"
        aria-label="Attendance Details"
        data-cooltipz-dir="bottom">
        <BiDetail />
      </button></td> */}
                </tr>
                <tr>
                  <th>Fine</th>
                  <td>Rs. 20</td>
                </tr>
                <tr>
                  <th>Date</th>
                  <td>November 19, 2021</td>
                </tr>
              </tbody>
              {/* <hr/> */}
              <tr>
                <th>
                  <hr />
                </th>
                <td>
                  <hr />
                </td>
              </tr>
            </>
          ))}
        </table>
      </div>
    </>
  );
}

export default Fins;
