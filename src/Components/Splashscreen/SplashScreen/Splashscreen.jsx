import logo from "../../../img/logo.svg";

function Splashscreen() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <img src={logo} alt="logo" className="w-72" />
    </div>
  );
}

export default Splashscreen;
