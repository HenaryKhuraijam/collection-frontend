import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import BrowserRouter and Routes
import App from "../App";
import RegistrationPage from "../pages/RegistrationPage";

const MyRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/register" element={<RegistrationPage />} />
    </Routes>
  </BrowserRouter>
);

export default MyRoutes;
