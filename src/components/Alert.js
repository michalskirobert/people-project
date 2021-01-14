import React from "react";
import { useGlobalContext } from "../useGlobalContext";

const Alert = () => {
  const { alert } = useGlobalContext();
  return (
    <div className={`alert ${alert.type}`}>
      <p>{alert.msg}</p>
    </div>
  );
};

export default Alert;
