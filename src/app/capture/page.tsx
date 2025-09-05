"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

const CapturePage = () => {
  const [photoCount, setPhotoCount] = useState(0);
  const [timer, setTimer] = useState("3s");
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [capturedPhotos, setCapturedPhotos] = useState<string[]>([]);
  const [isFlashing, setIsFlashing] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const router = useRouter();

  // Kamera
  useEffect(() => {
    const startCamera = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
          audio: false,
        });
        setStream(mediaStream);
      } catch (err) {
        console.error("Error accessing camera:", err);
      }
    };
    startCamera();

    return () => {
      stream?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => console.error(err));
    }
  }, [stream]);

  const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

  const takePhoto = async () => {
    if (photoCount >= 4) {
      sessionStorage.setItem("capturedPhotos", JSON.stringify(capturedPhotos));

      
      router.push("/success");
      return;
    }

    if (!videoRef.current || !canvasRef.current) return;

    // Timer countdown
    const seconds = parseInt(timer);
    setCountdown(seconds);

    for (let i = seconds; i > 0; i--) {
      setCountdown(i);
      await wait(1000);
    }

    setCountdown(null);

    // Efek flash
    setIsFlashing(true);
    setTimeout(() => setIsFlashing(false), 150);

    // Sound cekrek
    const audio = new Audio("/cekrek.wav");
    audio.play().catch((err) => console.error(err));

    // Ambil foto
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const photoDataUrl = canvas.toDataURL("image/png");

    setCapturedPhotos((prev) => [...prev, photoDataUrl]);
    const newCount = photoCount + 1;
    setPhotoCount(newCount);
  };

  return (
    <main className="flex justify-center flex-1 px-10 py-20 gap-8 relative">
      {/* Flash overlay */}
      {isFlashing && (
        <div className="fixed inset-0 bg-white/60 z-50 pointer-events-none transition-opacity duration-1000"></div>
      )}

      {/* Bagian kiri: Kamera + controls */}
      <div className="flex flex-1 flex-col items-center justify-center max-w-4xl relative">
        <div className="text-center text-white text-2xl font-semibold mb-4">
          {photoCount}/4
        </div>

        <div className="relative rounded-2xl aspect-video w-[80%] mb-8 overflow-hidden bg-black">
          {stream ? (
            <>
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover"
              />
              {/* Countdown */}
              {countdown && (
                <div className="absolute inset-0 flex items-center justify-center z-40">
                  <span className="text-white text-[6rem] font-bold drop-shadow-lg">
                    {countdown}
                  </span>
                </div>
              )}
            </>
          ) : (
            <div className="flex items-center justify-center w-full h-full text-gray-400">
              Camera Preview
            </div>
          )}
          <canvas ref={canvasRef} className="hidden" />
        </div>

        <div className="text-center mb-8 flex flex-col items-center gap-4">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-white">Select Timer</span>
            <Select value={timer} onValueChange={setTimer}>
              <SelectTrigger className="w-20 bg-transparent border-gray-300 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3s">3s</SelectItem>
                <SelectItem value="5s">5s</SelectItem>
                <SelectItem value="10s">10s</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-7">
            <Button
              onClick={() => {
                setCapturedPhotos([]);
                setPhotoCount(0);
                setCountdown(null);
                setIsFlashing(false);
              }}
              className="bg-transparent border border-gray-300 text-white hover:bg-gray-100/20 cursor-pointer text-lg px-8 py-3 rounded-full font-semibold"
            >
              Retake
            </Button>
            <Button
              onClick={takePhoto}
              disabled={!!countdown}
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-3 rounded-full font-semibold"
            >
              {photoCount === 0
                ? "Start Capture (4 Photos)"
                : photoCount >= 4
                  ? "Done"
                  : "Take next"}
            </Button>
          </div>
        </div>
      </div>

      {/* Bagian kanan: Preview foto */}
      <div className="flex flex-col gap-4">
        {capturedPhotos.length > 0 &&
          capturedPhotos.map((photo, index) => (
            <div
              key={index}
              className="w-64 aspect-video rounded-lg overflow-hidden border border-gray-300"
            >
              <img
                src={photo}
                alt={`Captured ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
      </div>
    </main>
  );
};

export default CapturePage;
