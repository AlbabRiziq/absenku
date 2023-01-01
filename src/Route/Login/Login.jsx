import { useState, useEffect } from "react";
import logo from "../../img/logoUtama.svg";
import axios from "axios";

function Login() {
  const [nama, setNama] = useState("");
  const [nisn, setNisn] = useState("");

  const handleLogin = () => {
    axios({
      method: "GET",
      url: "http://localhost:8080/api/login",
      params: {
        nama: nama.toUpperCase(),
        nisn,
      },
    }).then((res) => {
      console.log(res.data);
      if (res.data === true) {
        window.localStorage.setItem("login", JSON.stringify({ nama, nisn }));
        window.location.reload();
      }
    });
  };

  return (
    <div className="h-screen w-screen flex flex-col  items-center justify-center">
      <div>
        <img src={logo} alt="Logo" className="h-40" />
      </div>
      <div className="mt-20">
        <form action="" className="flex flex-col items-center">
          <input
            type="username"
            className="bg-[#e9e995] h-12 rounded-lg w-64 placeholder:text-[#967248] shadow-lg text-center my-3"
            placeholder="NAMA"
            onChange={(e) => {
              setNama(e.target.value);
            }}
          />
          <input
            type="number"
            className="bg-[#e9e995] h-12 rounded-lg w-64 placeholder:text-[#967248] shadow-lg text-center my-3"
            placeholder="NISN"
            onChange={(e) => {
              setNisn(e.target.value);
            }}
          />

          <button
            type="button"
            onClick={handleLogin}
            className="bg-[#e9e995] text-[#967248] h-12 rounded-lg w-44 my-3 shadow-lg hover:w-48 hover:rounded-full"
          >
            LANJUT
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
