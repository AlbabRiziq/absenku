import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Absen from "./Route/Absen/Absen";
import Sakit from "./Route/Sakit/Sakit";
import Izin from "./Route/Izin/Izin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/absen" element={<Absen />} />
        <Route path="/sakit" element={<Sakit />} />
        <Route path="/izin" element={<Izin />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
