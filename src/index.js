import React from 'react';
import ReactDOM from 'react-dom/client';
import App1 from './sample1/App';
import App2 from './sample2/App';
import App3 from './sample3/App';
import "./input.css";
import { ThemeProvider } from '@mui/styles';
import { theme } from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <App1 /> */}
      {/* <App2 /> */}
      <App3 />
    </ThemeProvider>
  </React.StrictMode>
);