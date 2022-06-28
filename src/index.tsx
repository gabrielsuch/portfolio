import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {BrowserRouter} from "react-router-dom"
import {OptionProvider} from "./providers/Context/index"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <OptionProvider>
        <App />
      </OptionProvider>
    </BrowserRouter>
  </React.StrictMode>
);