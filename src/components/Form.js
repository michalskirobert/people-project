import React from "react";
import { useGlobalContext } from "../useGlobalContext";
import { ageData, incomeData } from "./data";
import Alert from "./Alert";

export const Form = () => {
  const {
    handleSubmit,
    ethnicity,
    setEthnicity,
    setIncome,
    setAge,
    setIsModalOpen,
    alert,
    showAlert,
  } = useGlobalContext();

  return (
    <form onSubmit={handleSubmit}>
      {alert.show && <Alert />}
      <div className="form-control">
        <label htmlFor="age">Age :</label>
        <select id="age" onChange={(e) => setAge(e.target.value)}>
          <option>Choose age...</option>
          {ageData.map((income, index) => {
            const { age } = income;
            return (
              <option value={age} key={index}>
                {age}
              </option>
            );
          })}
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="ethnicity">Ethnicity</label>
        <input
          type="text"
          id="ethnicity"
          value={ethnicity}
          onChange={(e) => setEthnicity(e.target.value)}
          placeholder="E.g. Asian"
        />
      </div>
      <div className="form-control">
        <label htmlFor="income">Yearly income :</label>
        <select onChange={(e) => setIncome(e.target.value)}>
          <option>Choose yearly income...</option>
          {incomeData.map((income, index) => {
            const { amount } = income;
            return (
              <option value={amount} key={index}>
                {amount}
              </option>
            );
          })}
        </select>
      </div>
      <div className="buttons__container">
        <button type="submit" className="btn confirm">
          Add
        </button>
        <button
          className="btn cancel"
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export const EthnicityForm = () => {
  const {
    ethnicity,
    setEthnicity,
    setIsUpdating,
    setIsModalOpen,
    addEthHandle,
    alert,
    showAlert,
  } = useGlobalContext();
  return (
    <form onSubmit={addEthHandle}>
      {alert.show && <Alert />}
      <div className="form-control">
        <label htmlFor="ethnicity">Ethnicty :</label>
        <input
          type="text"
          id="ethnicity"
          value={ethnicity}
          onChange={(e) => setEthnicity(e.target.value)}
          placeholder="E.g. Asian"
        />
      </div>
      <div className="buttons__container">
        <button type="submit" className="btn confirm">
          Add
        </button>
        <button
          className="btn cancel"
          onClick={() => {
            setIsModalOpen(false);
            setIsUpdating(false);
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
