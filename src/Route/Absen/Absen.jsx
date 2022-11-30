import { useRef, useEffect } from "react";
import Judul from "../../Components/Splashscreen/Judul/Judul";
import Navbar from "../../Components/Splashscreen/Navbar/Navbar";

function Absen() {
  const videoRef = useRef(null);

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error("error:", err);
      });
  };

  return (
    <div>
      <Judul />
      <div className="w-screen flex items-center justify-center my-5">
        <video ref={videoRef} className="rounded-3xl" />
      </div>
      <Navbar />
    </div>
  );
}

export default Absen;
