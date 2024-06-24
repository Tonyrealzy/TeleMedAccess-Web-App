import "./App.css";
import { AuthProvider } from "./AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import LandingPage from "./pages/LandingPage";
import InitSessionPage from "./pages/InitSessionPage";
import UserSymptomsPage from "./pages/UserSymptomsPage";
import DifferentialDiagnosisPage from "./pages/DifferentialDiagnosisPage";
import TermsConditionsPage from "./pages/TermsConditionsPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route exact path="/initSession" element={<InitSessionPage/>} />
        <Route exact path="/terms" element={<ProtectedRoute><TermsConditionsPage/></ProtectedRoute>} />
        <Route exact path="/addSymptoms" element={<ProtectedRoute><UserSymptomsPage/></ProtectedRoute>} />
        <Route exact path="/diagnosis" element={<ProtectedRoute><DifferentialDiagnosisPage/></ProtectedRoute>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>

    </AuthProvider>
  );
}

export default App;
