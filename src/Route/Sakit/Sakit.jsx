import Judul from "../../Components/Judul/Judul";
import Navbar from "../../Components/Navbar/Navbar";

function Sakit() {
  return (
    <div>
      <Judul />
      <div className="bg-[#e9e995] p-3 w-fit px-10 m-5 rounded-lg md:m-10 lg:m-16">
        <p className="text-[#884939] font-bold">SAKIT</p>
      </div>
      <div>
        <form action="" className="flex justify-center items-center flex-col">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="MASUKAN ALASAN KAMU"
            className="bg-[#e9e995] rounded-lg mb-10 text-red-900 placeholder:text-[#884939] p-5"
          ></textarea>
          <button className="bg-[#e9e995] text-[#874839] p-3 rounded-lg m-5 font-bold hover:px-5 transition-all">
            KIRIM
          </button>
        </form>
      </div>
      <Navbar />
    </div>
  );
}

export default Sakit;
