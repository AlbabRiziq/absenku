import { useRef, useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import "./qr.css";

function Qr() {
  const videoRef = useRef(null);
  const hasil = useRef(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      fps: 10,
      qrbox: {
        width: 250,
        height: 250,
      },
    });
    scanner.render(onScanSuccess);
  }, []);

  const onScanSuccess = (decodedText, decodedResult) => {
    console.log(decodedResult.decodedText);
  };

  // useEffect(() => {
  //   getCam();
  // }, [videoRef]);

  // const getCam = () => {
  //   navigator.mediaDevices
  //     .getUserMedia({ video: { width: 300 } })
  //     .then((stream) => {
  //       let video = videoRef.current;
  //       video.srcObject = stream;
  //       video.play();
  //     })
  //     .catch((err) => {
  //       console.error("error:", err);
  //     });
  // };

  return (
    <div className="-mt-10">
      <video ref={videoRef}></video>
      <div className="p-5 h-80 w-80">
        <div className="hasil rounded-lg" id="reader" ref={hasil}></div>
      </div>
    </div>
  );
}

export default Qr;
