import Judul from "../../Components/Judul/Judul";
import jahra from "../../img/jahra.jpeg";

function Profil() {
  return (
    <div>
      <Judul />
      <div className="flex items-center flex-col mt-5">
        <img src={jahra} alt="Profile" className="rounded-full h-32 w-32" />
        <p className="text-[#884939] font-bold mt-4 text-xl text-center">
          RIZIQ LILI ULIL ALBAB
        </p>
      </div>
    </div>
  );
}

export default Profil;
