import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ErrorBoundary from "./components/Error";
import disableDevtool from "disable-devtool";

if (import.meta.env.VITE_APP_NODE_ENV==="production") {
  disableDevtool();
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
