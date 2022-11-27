import { useState } from "react";
import Beranda from "./Components/Splashscreen/Beranda/Beranda";
import Login from "./Login/Login";
// import Splashscreen from "./Components/Splashscreen/SplashScreen/Splashscreen";
// import Login from "./Login/Login";

// function Mengganti() {
//   const [isLogin, setIsLogin] = useState(true);
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
    </div>
  );
}

export default App;
