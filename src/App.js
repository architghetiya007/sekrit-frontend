import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConfirmLogin from "./Components/ConfirmLogin.js";
import Loginform from "./Components/Loginform.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginform />} />
        <Route path="/confirm-login" element={<ConfirmLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
