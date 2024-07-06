import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import disableDevtool from 'disable-devtool'

if (import.meta.env.NODE_ENV === "production") {
  disableDevtool();
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
