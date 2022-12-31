import Judul from "../../Components/Judul/Judul";
import Navbar from "../../Components/Navbar/Navbar";
import sakit from "../../img/icon/Sick.svg";
import izin from "../../img/icon/checkBox.svg";
import alpha from "../../img/icon/alpha.svg";
import { useNavigate } from "react-router-dom";

function Riwayat() {
  const navigate = useNavigate();
  const login = window.localStorage.getItem("login");

  if (login === null) {
    navigate("/");
  }
  return (
    <div className="w-screen">
      <Judul />
      <div className="bg-[#e9e995] p-3 w-fit px-10 m-5 rounded-lg md:m-10 lg:m-16">
        <h1>RIWAYAT</h1>
      </div>

      {/*  */}
      <div className="w-full flex justify-center flex-wrap">
        <div className="bg-[#e9e995] w-[150px] flex flex-col items-center justify-center p-5 rounded-xl shadow-xl m-[10px] hover:scale-x-110 hover:shadow-2xl transition-all">
          <img src={sakit} alt="" />
          <h1 className="text-sm mt-5 font-bold text-[#8d513e] ">SAKIT</h1>
          <p className="mt-2">1</p>
        </div>
        <div className="bg-[#e9e995] w-[150px] flex flex-col items-center justify-center p-5 rounded-xl shadow-xl m-[10px] hover:scale-x-110 hover:shadow-2xl transition-all">
          <img src={izin} alt="" />
          <h1 className="text-sm mt-5 font-bold text-[#8d513e] ">IZIN</h1>
          <p className="mt-2">1</p>
        </div>
        <div className="bg-[#e9e995] w-[150px] flex flex-col items-center justify-center p-5 rounded-xl shadow-xl m-[10px] hover:scale-x-110 hover:shadow-2xl transition-all">
          <img src={alpha} alt="" />
          <h1 className="text-sm mt-5 font-bold text-[#8d513e] ">ALPHA</h1>
          <p className="mt-2">1</p>
        </div>
      </div>

      {/*  */}
      <div className="w-full flex justify-center">
        <Navbar />
      </div>
    </div>
  );
}

export default Riwayat;
