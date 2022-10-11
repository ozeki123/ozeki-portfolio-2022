import React, { useState } from "react";

const AppContext = React.createContext();

const ContextProvider = ({ children }) => {
  const [offsetHeight, setOffsetHeight] = useState(0);
  const [offsetSub, setOffsetSub] = useState(0);
  const [offsetDesc1, setOffsetDesc1] = useState(0);
  const [offsetDesc2, setOffsetDesc2] = useState(0);

  return (
    <AppContext.Provider 
      value={{
        offsetHeight, 
        setOffsetHeight, 
        offsetSub, 
        setOffsetSub,
        offsetDesc1,
        setOffsetDesc1,
        offsetDesc2,
        setOffsetDesc2
      }}>
      { children }
    </AppContext.Provider>
  )
}

export { AppContext, ContextProvider };