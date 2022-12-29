import { useState, useEffect } from "react";
import Beranda from "./Route/Beranda/Beranda";
import Splashscreen from "./Components/Splashscreen/SplashScreen/Splashscreen";
import Login from "./Route/Login/Login";

function Mengganti() {
  const login = JSON.parse(window.localStorage.getItem("login"));
  console.log(login);
  useEffect(() => {
    if (login) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  });
  const [isLogin, setIsLogin] = useState(false);
  return <div>{isLogin ? <Beranda /> : <Login />}</div>;
}

function App() {
  const [ganti, setganti] = useState(false);

  setTimeout(() => {
    setganti(true);
  }, 3000);

  return <div>{!ganti ? <Splashscreen /> : <Mengganti />}</div>;
}

// function App() {
//   return (
//     <div>
//       <Beranda />
//       {/* <Loading /> */}
//     </div>
//   );
// }

export default App;
