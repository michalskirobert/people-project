import React from "react";
import { Form, EthnicityForm } from "./Form";
import { useGlobalContext } from "../useGlobalContext";

const Modal = () => {
  const { isUpdating } = useGlobalContext();
  return (
    <div className="modal">
      <div className="modal__content">
        {isUpdating ? <EthnicityForm /> : <Form />}
      </div>
    </div>
  );
};

export default Modal;
