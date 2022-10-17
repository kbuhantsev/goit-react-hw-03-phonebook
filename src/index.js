import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';

// const theme = createTheme();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      {/* <ThemeProvider theme={theme}> */}

      <App />
      {/* </ThemeProvider> */}
    </StyledEngineProvider>
  </React.StrictMode>
);
