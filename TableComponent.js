import React from "react";

const TableComponent = props => {
  return (
    <div>
      <h1>Table List</h1>
      {props.tableData.length === 0 && <h3>Sorry No Matches found.</h3>}
      {props.tableData.length > 0 && <table class="my-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {props.tableData.map(value => (
            <tr key={value._id}>
              <td>{value.name}</td>
              <td>{value.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
      }
    </div>
  );
};

export default TableComponent;
