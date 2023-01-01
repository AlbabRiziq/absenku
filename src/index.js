import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Absen from "./Route/Absen/Absen";
import Sakit from "./Route/Sakit/Sakit";
import Izin from "./Route/Izin/Izin";
import Profil from "./Route/Profil/Profil";
import Riwayat from "./Route/Riwayat/Riwayat";
import Beranda from "./Route/Beranda/Beranda";
import Guru from "./Route/Guru/Guru";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/app" element={<Beranda />} />
        <Route path="/absen" element={<Absen />} />
        <Route path="/sakit" element={<Sakit />} />
        <Route path="/izin" element={<Izin />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/riwayat" element={<Riwayat />} />
        <Route path="/guru" element={<Guru />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
