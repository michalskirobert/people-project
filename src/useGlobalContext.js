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
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //validation
    if (!age) {
      showAlert(true, "dangerous", "Please enter your ethnicity");
    } else if (!ethnicity) {
      showAlert(true, "dangerous", "Please enter your income");
    } else if (!income) {
      showAlert(true, "dangerous", "Please enter your age");
    } else {
      //creating person
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
      showAlert("", "", false);
    }
  };

  const addEthHandle = (e) => {
    e.preventDefault();

    if (!ethnicity) {
      showAlert(true, "dangerous", "Please enter your ethnicity");
    } else {
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
      showAlert(false, "", "");
      setEthnicity("");
      setIsUpdating(false);
    }
  };

  const updateEthnicity = (id) => {
    setIDHolder(id);
    setIsUpdating(true);
  };

  const removeAge = (id) => {
    setPeople(
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

  useEffect(() => {
    setPeople([firstPerson]);
  }, []);

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
        alert,
        showAlert,
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
