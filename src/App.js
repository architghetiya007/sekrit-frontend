import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConfirmLogin from "./Components/ConfirmLogin.js";
import Loginform from "./Components/Loginform.js";
import Home from "./Components/Home.js";
import Coverage from "./Components/Coverage.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginform />} />
        <Route path="/confirm-login" element={<ConfirmLogin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/coverage" element={<Coverage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
