import React from "react";
import { ThemeCreator } from "./styles/ThemeCreator";
import ErrorBoundary from "./components/Error";
import GlobalStyle from "./styles/globalstyles";
import { StyleSheetManager } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Custom404 from "./pages/Error404Page";
import IntermediaryPage from "./pages/IntermediaryPage";
import LandingPage from "./pages/LandingPage";
// import ProtectedRoute from './ProtectedRoute';
import InitSessionPage from './pages/InitSessionPage';
import TermsConditionsPage from './pages/TermsConditionsPage';

function App() {

  return (
    <>
      <StyleSheetManager>
        <ThemeCreator>
          <GlobalStyle />
          <BrowserRouter>
            <ErrorBoundary>
              <Routes>
              <Route path="/" element={<LandingPage/>} />
              <Route exact path="/initSession" element={<InitSessionPage/>} />
                <Route path="/virtualDoctor" element={<IntermediaryPage />} />
                <Route exact path="/terms" element={<TermsConditionsPage/>} />
                <Route path="*" element={<Custom404 />} />
              </Routes>
            </ErrorBoundary>
          </BrowserRouter>
        </ThemeCreator>
      </StyleSheetManager>
    </>
  );
}

export default App;
