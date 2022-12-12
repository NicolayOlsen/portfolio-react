import React, { useState } from 'react'

const DarkModeContext = React.createContext();

function DarkModeProvider(props) {
    const [darkMode, setDarkMode] = useState(false);
  
    return (
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        {props.children}
      </DarkModeContext.Provider>
    );
  }

export default DarkModeProvider
