import React from "react";

const DarkModeContext = React.createContext();

function DarkModeButton() {
  const { darkMode, setDarkMode } = React.useContext(DarkModeContext);

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? 'Turn off dark mode' : 'Turn on dark mode'}
    </button>
  );
}

export default DarkModeButton