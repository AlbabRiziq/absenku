import logo from "../../../img/logoUtama.svg";

function Beranda() {
  return (
    <div className="h-screen w-screen flex flex-col  items-center justify-center">
      <div>
        <img src={logo} alt="Logo" className="h-40" />
      </div>
      <div className="form mt-20">
        <form action="">
          <input
            type=""
            className="bg-[#e9e995] h-12 rounded-lg w-64 placeholder:text-[#967248] text-center"
            placeholder="NAMA"
          />
          <input
            type=""
            className="bg-[#e9e995] h-12 rounded-lg w-64 placeholder:text-[#967248] text-center"
            placeholder="NAMA"
          />
        </form>
      </div>
    </div>
  );
}

export default Beranda;
