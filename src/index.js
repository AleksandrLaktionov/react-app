import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'normalize.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from 'react/cjs/react.production.min';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

reportWebVitals(console.log);
