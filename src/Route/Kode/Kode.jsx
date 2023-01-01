import logo from "../../img/logoUtama.svg";

function Kode() {
  return (
    <div className="h-screen w-screen flex flex-col  items-center justify-center">
      <div>
        <img src={logo} alt="Logo" className="h-40" />
      </div>
      <div className="mt-20">
        <h1 className="font-bold text-[#d59d36] text-center">
          MASUKAN KODE KELAS
        </h1>

        <form action="" className="flex flex-col items-center">
          <input
            type="number"
            className="bg-[#e9e995] h-12 rounded-lg w-64 placeholder:text-[#967248] shadow-lg text-center my-3"
            placeholder="KODE KELAS"
          />

          <button
            type="button"
            className="bg-[#e9e995] text-[#967248] h-12 rounded-lg w-44 my-3 shadow-lg hover:w-48 hover:rounded-full"
          >
            MASUK
          </button>
        </form>
      </div>
    </div>
  );
}

export default Kode;
