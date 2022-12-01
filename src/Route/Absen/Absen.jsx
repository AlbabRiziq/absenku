import { useRef, useEffect, useState } from "react";
import Judul from "../../Components/Splashscreen/Judul/Judul";
import Navbar from "../../Components/Splashscreen/Navbar/Navbar";

import * as faceapi from "face-api.js";

function Absen() {
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [captureVideo, setCaptureVideo] = useState(false);

  const videoRef = useRef();
  const videoHeight = 480;
  const videoWidth = 640;
  const canvasRef = useRef();

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  useEffect(() => {
    const loadModels = async () => {
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
        faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
        faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
        faceapi.nets.faceExpressionNet.loadFromUri("/models"),
      ]).then(setModelsLoaded(true));
    };
    loadModels();
  });

  const handleVideoOnPlay = () => {
    setInterval(async () => {
      if (canvasRef && canvasRef.current) {
        canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(
          videoRef.current
        );
        const displaySize = {
          width: videoWidth,
          height: videoHeight,
        };

        faceapi.matchDimensions(canvasRef.current, displaySize);

        const detections = await faceapi.detectAllFaces(
          videoRef.current,
          new faceapi.TinyFaceDetectorOptions()
        );

        const resizedDetections = faceapi.resizeResults(
          detections,
          displaySize
        );

        canvasRef &&
          canvasRef.current &&
          canvasRef.current
            .getContext("2d")
            .clearRect(0, 0, videoWidth, videoHeight);
        canvasRef &&
          canvasRef.current &&
          faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
        canvasRef &&
          canvasRef.current &&
          faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections);
        canvasRef &&
          canvasRef.current &&
          faceapi.draw.drawFaceExpressions(
            canvasRef.current,
            resizedDetections
          );
      }
    }, 100);
  };

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
        <video
          ref={videoRef}
          height={videoHeight}
          width={videoWidth}
          onPlay={handleVideoOnPlay}
          className="rounded-3xl"
        />
        <canvas className="absolute" ref={canvasRef}></canvas>
      </div>
      <Navbar />
    </div>
  );
}

export default Absen;
