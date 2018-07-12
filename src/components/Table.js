import React from "react";
import PropTypes from "prop-types";

const Table = ({ data, column }) => {
  return (
    <table className="table">
      <thead>
        <tr>{column.map((v, keys) => <td key={keys}>{v}</td>)}</tr>
      </thead>
      <tbody>
        {data.map((v, keys) => {
          return (
            <tr key={keys}>
              <td>{v.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.array
};

Table.defaultProps = {
  column: ["column 1", "column 2", "column 3"]
};

export default Table;
