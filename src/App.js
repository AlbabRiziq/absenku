import { useState } from "react";
import Beranda from "./Route/Beranda/Beranda";
import Splashscreen from "./Components/Splashscreen/SplashScreen/Splashscreen";
import Loading from "./Components/Loading/Loading";
import Qr from "./Components/Qr/Qr";

// function Mengganti() {
//   const [isLogin, setIsLogin] = useState(false);
//   return <div>{isLogin ? <Beranda /> : <Login />}</div>;
// }

// function App() {
//   const [ganti, setganti] = useState(false);

//   setTimeout(() => {
//     setganti(true);
//   }, 5000);

//   return <div>{!ganti ? <Splashscreen /> : <Mengganti />}</div>;
// }

function App() {
  return (
    <div>
      <Beranda />
      {/* <Loading /> */}
    </div>
  );
}

export default App;
