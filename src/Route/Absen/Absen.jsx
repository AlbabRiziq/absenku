import { useRef, useEffect, useState } from "react";
import Judul from "../../Components/Splashscreen/Judul/Judul";
import Navbar from "../../Components/Splashscreen/Navbar/Navbar";
import * as faceapi from "face-api.js";
import * as ml5 from "ml5";
import Loading from "../../Components/Loading/Loading";

function Absen() {
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [model2Loaded, setIsModel2Loaded] = useState(false);
  const [identitas, setIdentitas] = useState();

  const videoRef = useRef();
  const videoHeight = 320;
  const videoWidth = 480;
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
      ]).then(() => {
        setIsModel2Loaded(true);
        console.log("model 2 loaded");
      });
    };
    loadModels();
  });

  useEffect(() => {
    let klasifikasi = ml5.imageClassifier("./models/muka/model.json", () => {
      console.log("Model Loaded");
      setModelsLoaded(true);
      gotResult();
    });

    function gotResult() {
      setInterval(() => {
        klasifikasi.classify(videoRef.current, (err, results) => {
          if (err) {
            console.log(err);
          } else {
            console.log(results);
            setIdentitas(results[0].label);
          }
        });
      }, 1000);
    }
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

        // console.log(detections);

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
      <div className="w-screen flex items-center justify-center my-5 p-5 flex-col">
        <video
          ref={videoRef}
          height={videoHeight}
          width={videoWidth}
          onPlay={handleVideoOnPlay}
          className="rounded-3xl"
        />
        <canvas className="absolute" ref={canvasRef}></canvas>
        {model2Loaded && modelsLoaded ? <div>{identitas}</div> : <Loading />}
      </div>
      <Navbar />
    </div>
  );
}

export default Absen;
