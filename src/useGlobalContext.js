import React, { useState, useContext, useEffect } from "react";
import { firstPerson } from "./components/data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [people, setPeople] = useState([]);
  const [ethnicity, setEthnicity] = useState("");
  const [income, setIncome] = useState("");
  const [age, setAge] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [IDholder, setIDHolder] = useState(null);

  useEffect(() => {
    setPeople([firstPerson]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newPerson = {
      id: new Date().getTime().toString(),
      ethnicity: [ethnicity],
      income,
      age,
    };
    setPeople([...people, newPerson]);
    setEthnicity("");
    setAge("");
    setIncome("");
    setIsModalOpen(false);
  };

  const addEthHandle = (e) => {
    e.preventDefault();
    setPeople(
      people.map((person) => {
        if (person.id === IDholder) {
          return {
            ...person,
            ethnicity: [...person.ethnicity, ethnicity],
          };
        }
        return person;
      })
    );
    setIsUpdating(false);
  };

  const updateEthnicity = (id) => {
    setIDHolder(id);
    setIsUpdating(true);
  };

  const removeAge = (id) => {
    return setPeople(
      people.map((person) => {
        if (person.id === id) {
          return {
            ...person,
            age: "",
          };
        }
        return person;
      })
    );
  };

  const removeEthnicity = (id) => {
    setPeople(
      people.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            ethnicity: [],
          };
        }
        return item;
      })
    );
  };

  const removeEthnicityCell = (id, index) => {
    setPeople(
      people.map((item) => {
        const { ethnicity } = item;
        if (item.id === id) {
          return {
            ...item,
            ethnicity: ethnicity.filter((item, i) => i !== index),
          };
        }
        return item;
      })
    );
  };

  const removeIncome = (id) => {
    setPeople(
      people.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            income: "",
          };
        }
        return item;
      })
    );
  };

  return (
    <AppContext.Provider
      value={{
        people,
        handleSubmit,
        isModalOpen,
        setIsModalOpen,
        setIncome,
        setEthnicity,
        age,
        setAge,
        isUpdating,
        setIsUpdating,
        updateEthnicity,
        addEthHandle,
        removeAge,
        removeEthnicity,
        removeEthnicityCell,
        removeIncome,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
