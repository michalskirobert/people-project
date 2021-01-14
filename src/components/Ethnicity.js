import React from "react";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import Modal from "./../components/Modal";
import { useGlobalContext } from "./../useGlobalContext";

const dotIn = "Or";
const dot = "And";

const Ethnicity = () => {
  const {
    isModalOpen,
    setIsModalOpen,
    people,
    updateEthnicity,
    isUpdating,
    removeAge,
    removeEthnicityCell,
    removeEthnicity,
    removeIncome,
  } = useGlobalContext();

  return (
    <div className="people__container">
      {isModalOpen && <Modal />}
      {isUpdating && <Modal />}
      <ul className="people">
        <li>
          <div className="people__headling">
            <h1>People</h1>
          </div>

          {people.map((person) => {
            const { id, income, age, ethnicity } = person;
            return (
              <ul className="person__container" key={id} id={id}>
                {age && (
                  <li>
                    <div className="box age__container" data-dot={dot}>
                      <h2>Age: {age}+</h2>
                      <button
                        className="btn remove"
                        onClick={() => removeAge(id)}
                      >
                        <MdRemoveCircle />
                      </button>
                    </div>
                  </li>
                )}
                {ethnicity.length > 0 && (
                  <li>
                    <div className="box ethnicity__container" data-dot={dot}>
                      <ul className="ethnicity">
                        <li>
                          <div className="centered">
                            <div className="ethnicity__title">
                              <h3>Ethnicity</h3>
                            </div>
                            <button
                              className="btn remove"
                              onClick={() => removeEthnicity(id)}
                            >
                              <MdRemoveCircle />
                            </button>
                          </div>
                        </li>
                        <li>
                          <ul className="ethnicity__list">
                            {ethnicity.map((eth, index) => {
                              return (
                                <li key={index}>
                                  <div
                                    className="ethnicity__item"
                                    data-dot={dotIn}
                                  >
                                    <h4>{eth}</h4>
                                    <button
                                      className="btn remove"
                                      onClick={() =>
                                        removeEthnicityCell(id, index)
                                      }
                                    >
                                      <MdRemoveCircle />
                                    </button>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </li>
                        <li>
                          <button
                            className="btn add"
                            onClick={() => updateEthnicity(id)}
                          >
                            <MdAddCircle />
                          </button>
                        </li>
                      </ul>
                    </div>
                  </li>
                )}
                {income && (
                  <li>
                    <div
                      className="box income-yearly__container"
                      data-dot={dot}
                    >
                      <h3>Income yearly {income}</h3>
                      <button
                        className="btn remove"
                        onClick={() => removeIncome(id)}
                      >
                        <MdRemoveCircle />
                      </button>
                    </div>
                  </li>
                )}
              </ul>
            );
          })}
        </li>
        <li>
          <button
            className="btn add-person"
            onClick={() => setIsModalOpen(true)}
          >
            <IoIosAdd />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Ethnicity;
