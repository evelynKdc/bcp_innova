
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import { HomePage } from './pages/HomePage';
import { RegisterPage } from "./pages/RegisterPage";
import { IntranetPage } from "./pages/IntranetPage";
import { LoginPage } from "./pages/LoginPage";


function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/registro" element={<RegisterPage />} />
      <Route path="/intranet" element={<IntranetPage />} />
      <Route path="/login" element={<LoginPage />} />


    </Routes>
  </Router>
  )
}


export default App
