import { createContext, useContext, useReducer, useState } from "react";
import { authReducer } from "../reducer";

const Context = createContext();

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: localStorage.getItem("author")
      ? JSON.parse(localStorage.getItem("author"))
      : false,
  });
  const data = {
    ...state,
    dispatch,
  };
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useAuth = () => useContext(Context);

export default Provider;
