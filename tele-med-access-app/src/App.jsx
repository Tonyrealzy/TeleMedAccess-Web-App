import React from "react";
import { Suspense, lazy } from "react";
import { ThemeCreator } from "./styles/ThemeCreator";
import GlobalStyle from "./styles/globalstyles";
import { StyleSheetManager } from "styled-components";
import {
  AppContainer,
  CenteringDiv,
  PageRender
} from "./components/Display/display.styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Screens/Loading/Loader";
// import ProtectedRoute from './ProtectedRoute';

const Custom404 = lazy(() => import("./pages/Error404Page"));
const IntermediaryPage = lazy(() => import("./pages/IntermediaryPage"));
const LandingPage = lazy(() => import("./pages/LandingPage"));
const InitSessionPage = lazy(() => import("./pages/InitSessionPage"));
const TermsConditionsPage = lazy(() => import("./pages/TermsConditionsPage"));

function App() {
  return (
    <>
      <StyleSheetManager>
        <ThemeCreator>
          <GlobalStyle />
          <BrowserRouter>
            <Suspense
              fallback={
                <PageRender>
                  <CenteringDiv>
                    <AppContainer>
                      <Loader loading={true} />
                    </AppContainer>
                  </CenteringDiv>
                </PageRender>
              }
            >
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route
                  exact
                  path="/initSession"
                  element={<InitSessionPage />}
                />
                <Route
                  exact
                  path="/virtualDoctor"
                  element={<IntermediaryPage />}
                />
                <Route exact path="/terms" element={<TermsConditionsPage />} />
                <Route path="*" element={<Custom404 />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </ThemeCreator>
      </StyleSheetManager>
    </>
  );
}

export default App;
