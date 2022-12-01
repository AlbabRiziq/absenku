import home from "../../../img/icon/home.svg";
import setting from "../../../img/icon/setting.svg";
import list from "../../../img/icon/list.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="lg:w-11/12 lg:mb-4 lg:rounded-full fixed bottom-0 bg-[#e9e995] w-full kecil:h-16 lumayan:h-20 kecil:rounded-2xl rounded-t-3xl flex items-center justify-evenly ">
      <Link to="/">
        {" "}
        <img src={home} className="kecil:h-7 lumayan:h-8" alt="" />
      </Link>
      <img src={list} className="kecil:h-7 lumayan:h-8" alt="" />
      <img src={setting} className="kecil:h-7 lumayan:h-8" alt="" />
    </div>
  );
}

export default Navbar;
