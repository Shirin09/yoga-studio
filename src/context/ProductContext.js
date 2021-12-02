import React, { createContext, useReducer, useState } from "react";
import axios from "axios";

export const productsContext = createContext();

const INIT_STATE = {
  classes: [],
  classDetails: {},
  favorites: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CLASSES":
      return { ...state, classes: action.payload };
    case "GET_CLASSES_DETAILS":
      return { ...state, classDetails: action.payload };
    case "GET_FAVORITES":
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
};

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [data, setData] = useState({});
  const [dataId, setDataId] = useState();

  const getClasses = async (params = "") => {
    //history
    const { data } = await axios(`http://localhost:8000/classes/?${params}`);
    dispatch({
      type: "GET_CLASSES",
      payload: data,
    });
  };

  async function addClasses(product) {
    await axios.post(`http://localhost:8000/classes`, product);
    getClasses();
  }
  async function getClassDetails(id) {
    let { data } = await axios(`http://localhost:8000/classes/${id}`);
    dispatch({ type: "GET_CLASSES_DETAILS", payload: data });
  }

  function getData(data, id) {
    setData(data);
    setDataId(id);
  }
  async function deleteClass(id) {
    await axios.delete(`http://localhost:8000/classes/${id}`);
    getClasses();
  }

  async function editClassDetails(obj) {
    await axios.patch(`http://localhost:8000/classes/${dataId}`, obj);
    getClasses();
  }

  const getFavorites = () => {
    let data = JSON.parse(localStorage.getItem("favorites"));
    dispatch({
      type: "GET_FAVORITES",
      payload: data,
    });
  };

  return (
    <productsContext.Provider
      value={{
        classes: state.classes,
        classDetails: state.classDetails,
        data,
        favorites: state.favorites,
        getClasses,
        addClasses,
        getClassDetails,
        getData,
        editClassDetails,
        deleteClass,
        getFavorites,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
