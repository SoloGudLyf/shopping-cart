// StateContext.js
import React, { createContext, useState, useContext } from 'react';

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <StateContext.Provider value={{ cart, setCart }}>
      {children}
    </StateContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSharedState = () => useContext(StateContext);