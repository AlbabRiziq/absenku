import profilePic from "../../../img/jahra.jpeg";

function Beranda() {
  return (
    <div className="w-screen">
      <div className="bg-[#e9e995] absolute w-screen -z-30 h-64 rounded-b-3xl shadow-lg ">
        <h1 className="text-[#8d513e] font-bold m-5 text-2xl">ABSENKU</h1>
      </div>
      <div className="w-full flex flex-col justify-center items-center absolute mt-20 p-4">
        <div className=" flex  justify-center items-center">
          <div className="jam text-center text-sm mx-2 rounded-xl text-[#8d513e] bg-white p-2 px-5">
            <p className="font-semibold text-xs text-[10px]">
              MINGGU 20 NOVEMBER 2022
            </p>
            <p className="text-2xl font-bold">12:12:12</p>
          </div>
          <div className="jam text-center text-sm mx-2 rounded-xl text-[#8d513e] bg-white p-2 px-5">
            <p className="font-semibold text-xs text-[10px] ">
              MINGGU 20 NOVEMBER 2022
            </p>
            <p className="text-2xl font-bold">12:12:12</p>
          </div>
        </div>
        <div className="bg-white p-5 px-8 rounded-xl mt-5 shadow-xl flex items-center">
          <div className="text-center mx-3 ">
            <h1 className="font-bold text-[#8d513e]">ZAHRA AS SYIFA</h1>
            <p className="text-[#8d513e] font-light">123123123123</p>
          </div>

          <img
            src={profilePic}
            alt="Foto Profile"
            className="w-24  rounded-full "
          />
        </div>
      </div>
    </div>
  );
}

export default Beranda;
