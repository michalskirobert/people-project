import React from "react";
import { useGlobalContext } from "../useGlobalContext";

export const Form = () => {
  const {
    handleSubmit,
    ethnicity,
    setEthnicity,
    income,
    setIncome,
    setAge,
    age,
    setIsModalOpen,
  } = useGlobalContext();
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="ethnicity">Age :</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="ethnicity">Ethnicity</label>
        <input
          type="text"
          id="ethnicity"
          value={ethnicity}
          onChange={(e) => setEthnicity(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="income">Yearly income :</label>
        <input
          type="text"
          id="income"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />
      </div>
      <div className="buttons__container">
        <button type="submit">Add</button>
        <button onClick={() => setIsModalOpen(false)}>Cancel</button>
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
  } = useGlobalContext();
  return (
    <form onSubmit={addEthHandle}>
      <div className="form-control">
        <label htmlFor="ethnicity">Ethnicty :</label>
        <input
          type="text"
          id="ethnicity"
          value={ethnicity}
          onChange={(e) => setEthnicity(e.target.value)}
        />
      </div>
      <div className="buttons__container">
        <button type="submit">Add</button>
        <button
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
