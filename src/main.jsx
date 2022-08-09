import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { I18nextProvider } from "react-i18next";
import i18n from "./config/localitation/I18next";
import AuthProvider from "./auth/AuthProvider";
import { BrowserRouter } from "react-router-dom";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <AuthProvider>
      <I18nextProvider i18n={i18n}>
        <App/>
      </I18nextProvider>
    </AuthProvider>
  </BrowserRouter>

  </React.StrictMode>
)