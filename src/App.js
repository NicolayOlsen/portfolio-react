import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Fade from '@mui/material/Fade';
import { Navbar } from './components';
import { Header } from "./containers";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import "./App.css";

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  const [darkThemeEnabled, setDarkThemeEnabled] = useState(true);

  const toggleTheme = () => {
    setDarkThemeEnabled(!darkThemeEnabled);
  };

  return (
    <ThemeProvider theme={darkThemeEnabled ? lightTheme : darkTheme}>
      <CssBaseline />
      <div>
        <Navbar>
          <IconButton className='darkmode' onClick={toggleTheme}>
            {lightTheme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Navbar>
        <Header />
      </div>
    </ThemeProvider>
  );
};

export default App;
