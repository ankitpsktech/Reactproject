import React from "react";
const Alert = (props) => {
  return (
    <div>
    <center>
    <div className="alert alert-success">
        <strong>{props.message}</strong>
      </div>
    </center>
    </div>
  );
};
export default Alert;
