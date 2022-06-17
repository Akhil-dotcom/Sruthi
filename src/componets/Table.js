import React from "react";
import "../App.css";
import TableRow from "./TableRow";

function Table() {
  const countries = [
    {
      country: "India",
      capital: "Delhi",
    },
    {
      country: "USA",
      capital: "NYU",
    },
    {
      country: "USA",
      capital: "NYU",
    },
  ];
  return (
    <div>
      <table>
        <thead>
          <tr style={{ color: "blue" }}>
            <th>Country</th>
            <th>Capital</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr className="trow">
            <td>India</td>
            <td>Delhi</td>
          </tr>
          <tr className="trow">
            <td>India</td>
            <td>Delhi</td>
          </tr> */}
          {countries.map((item, index) => (
            <TableRow item={item} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
