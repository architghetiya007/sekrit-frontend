import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConfirmLogin from "./Components/ConfirmLogin.js";
import Loginform from "./Components/Loginform.js";
import Home from "./Components/Home.js";
import Coverage from "./Components/Coverage.js";
import Customrules from "./Components/Customrules.js";
import Secretscan from "./Components/Secretscanningrules.js";
import Secretscanedit from "./Components/Secretscanrules-edit.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginform />} />
        <Route path="/confirm-login" element={<ConfirmLogin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/coverage" element={<Coverage />} />       
        <Route path="/custom-rules" element={<Customrules />} />       
        <Route path="/secret-scan" element={<Secretscan />} />       
        <Route path="/secret-scan-edit" element={<Secretscanedit />} />       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
