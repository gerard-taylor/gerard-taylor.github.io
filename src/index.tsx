import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.scss';
import App from './App';
import Routes from './router/index';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from 'components/Navigation';
import Footer from "./components/Footer";

/* GLOBAL VARIABLES */
//@ts-ignore
window.$primaryLanguage = 'en';
//@ts-ignore
window.$secondaryLanguage = 'pl';
//@ts-ignore
window.$primaryLanguageIconId = 'primary-lang-icon';
//@ts-ignore
window.$secondaryLanguageIconId = 'secondary-lang-icon';

ReactDOM.render(
  <BrowserRouter>
    <Navigation/>
    <Routes/>
    <Footer />
  </BrowserRouter>, 
  document.getElementById('root')
);
serviceWorker.register();
