import React from "react";
import "../App.css";

function TableRow({ item }) {
  return (
    <tr className="trow">
      <td>{item.country}</td>
      <td>{item.capital}</td>
    </tr> // 100
  );
}

export default TableRow;
