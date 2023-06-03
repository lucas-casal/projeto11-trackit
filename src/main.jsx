import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ResetStyle from './global_styles/ResetStyle.jsx'
import GlobalStyle from './global_styles/GlobalStyle.jsx'
import axios from "axios";
axios.defaults.headers.common['Authorization'] = 'bv0Ks8i80MPdXuLLvCVzJc8f';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
