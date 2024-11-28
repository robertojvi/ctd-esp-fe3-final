import { createContext, useReducer, useMemo } from "react";
import axios from "axios";

export const initialState = { theme: "light", data: [], favs: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "ADD_FAV":
      return { ...state, favs: [...state.favs, action.payload] };
    default:
      return state;
  }
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      dispatch({ type: "SET_DATA", payload: response.data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useMemo(() => {
    fetchData();
  }, []);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
