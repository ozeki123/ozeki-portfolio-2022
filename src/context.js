import React, { useState } from "react";

const AppContext = React.createContext();

const ContextProvider = ({ children }) => {
  const [offsetHeight, setOffsetHeight] = useState(0);

  return (
    <AppContext.Provider value={{offsetHeight, setOffsetHeight}}>
      { children }
    </AppContext.Provider>
  )
}

export { AppContext, ContextProvider };