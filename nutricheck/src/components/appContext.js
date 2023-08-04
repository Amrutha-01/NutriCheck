import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [title, setTitle] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
  return (
    <AppContext.Provider value={{ title, setTitle, searchResults, setSearchResults }}>
      {children}
    </AppContext.Provider>
  );
}
