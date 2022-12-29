import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import profilePic from "../../img/rijik.jpg";
import mulaiAbsen from "../../img/icon/mulaiAbsen.svg";
import sakit from "../../img/icon/Sick.svg";
import izin from "../../img/icon/checkBox.svg";
import riwayat from "../../img/icon/History.svg";
import DataContext from "../../Context/DataContext";
import Navbar from "../../Components/Navbar/Navbar";

function Beranda() {
  const navigate = useNavigate();
  const login = window.localStorage.getItem("login");

  if (login == null) {
    navigate("/");
  }

  const [jam, setJam] = useState("");
  const [hari, setHari] = useState("");

  useEffect(() => {
    setInterval(() => {
      let waktu = new Date();
      let jam = waktu.getHours();
      let menit = waktu.getMinutes();
      let detik = waktu.getSeconds();
      setJam(`${jam}:${menit}:${detik}`);
    }, 1000);

    const listNamaHari = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
    ];
    const listNamaBulan = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    const tanggal = new Date();
    let indexHari = tanggal.getDay();

    setHari(
      `${listNamaHari[indexHari]}, ${tanggal.getDate()} ${
        listNamaBulan[tanggal.getMonth()]
      } ${tanggal.getFullYear()}`
    );
  }, []);

  return (
    <div className="w-screen">
      <div className="bg-[#e9e995] absolute w-screen -z-30 kecil:h-[23rem] lumayan:h-64 rounded-b-3xl shadow-lg ">
        <h1 className="text-[#8d513e] font-bold m-5 text-2xl">ABSENKU</h1>
      </div>
      <div className="w-full flex flex-col justify-center items-center absolute mt-20 p-4 ">
        <div className=" flex  justify-center items-center flex-wrap">
          <div className="jam text-center text-sm mx-2 rounded-xl text-[#8d513e] bg-white p-2 px-5 m-2">
            <p className="font-semibold text-[8px]">
              {hari.toLocaleUpperCase()}
            </p>
            <p className="text-base font-bold">{jam}</p>
          </div>
          <div className="jam text-center text-sm mx-2 rounded-xl text-[#8d513e] bg-white p-2 px-5 m-2">
            <p className="font-semibold text-[8px]">WAKTU ABSEN</p>
            <p className="text-base font-bold">12:12:12</p>
          </div>
        </div>
        <div className="bg-white p-5 px-8 rounded-xl mt-5 shadow-xl flex items-center">
          <div className="text-center mx-3 ">
            <h1 className="font-bold text-[#8d513e] text-left">
              Riziq Lili Ulil Albab
            </h1>
            <p className="text-[#8d513e] font-light">123123123123</p>
          </div>

          <img
            src={profilePic}
            alt="Foto Profile"
            className="w-24  rounded-full "
          />
        </div>
        <div className="w-full">
          <div className="mt-5">
            <h1 className="text-lg font-bold text-[#8d513e] text-center mt-14 ">
              ABSENSI DI BULAN NOVEMBER 2022
            </h1>
            {/*  */}

            <div className="flex w-full items-center justify-evenly flex-wrap">
              <div className="tempatbox mt-10 flex items-center justify-evenly flex-wrap">
                <Link to="/absen">
                  <div className="bg-[#e9e995] w-[150px] flex flex-col items-center justify-center p-5 rounded-xl shadow-xl m-[10px] hover:scale-x-110 hover:shadow-2xl transition-all">
                    <img src={mulaiAbsen} alt="" />
                    <h1 className="text-sm mt-5 font-bold text-[#8d513e] ">
                      MULAI ABSEN
                    </h1>
                  </div>
                </Link>

                <Link to="/sakit">
                  <div className="bg-[#e9e995] w-[150px] flex flex-col items-center justify-center p-5 rounded-xl shadow-xl m-[10px] hover:scale-x-110 hover:shadow-2xl transition-all">
                    <img src={sakit} alt="" />
                    <h1 className="text-sm mt-5 font-bold text-[#8d513e]">
                      SAKIT
                    </h1>
                  </div>
                </Link>

                <Link to="/izin">
                  <div className="bg-[#e9e995] w-[150px] flex flex-col items-center justify-center p-5 rounded-xl shadow-xl m-[10px] hover:scale-x-110 hover:shadow-2xl transition-all">
                    <img src={izin} alt="" />
                    <h1 className="text-sm mt-5 font-bold text-[#8d513e]">
                      IZIN
                    </h1>
                  </div>
                </Link>

                <Link to="/riwayat">
                  <div className="bg-[#e9e995] w-[150px] flex flex-col items-center justify-center p-5 rounded-xl shadow-xl m-[10px] hover:scale-x-110 hover:shadow-2xl transition-all">
                    <img src={riwayat} alt="" />
                    <h1 className="text-sm mt-5 font-bold text-[#8d513e]">
                      RIWAYAT
                    </h1>
                  </div>
                </Link>
              </div>
            </div>

            {/*  */}
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
        <Navbar />
      </div>
    </div>
  );
}

export default Beranda;
