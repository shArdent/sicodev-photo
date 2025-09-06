"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { services } from "@/lib/services";
import { AxiosError } from "axios";
import client from "@/lib/services/client";

const SuccessPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const router = useRouter();
  const [imgUrl, setImgUrl] = useState<string|null>("");
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const photos = JSON.parse(sessionStorage.getItem("capturedPhotos") || "[]");
    if (!photos || photos.length < 4) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const template = new window.Image();

    template.src = "/layout.png"; // ganti dengan nama file di public/

    template.onload = () => {
      canvas.width = 596;
      canvas.height = 2200;

      // Tentukan posisi slot hitam (x, y, w, h) sesuai template
      const slots = [
        { x: 41, y: 120, w: 500, h: 360 },
        { x: 41, y: 584, w: 500, h: 360 },
        { x: 41, y: 1043, w: 500, h: 360 },
        { x: 41, y: 1488, w: 500, h: 360 },
      ];

      photos.forEach((photo: string, i: number) => {
        const img = new window.Image();
        img.src = photo;
        img.onload = () => {
          const { x, y, w, h } = slots[i];
          ctx.drawImage(img, x, y, w, h);

          // setelah semua foto terload, baru gambar template di atas
          if (i === photos.length - 1) {
            ctx.drawImage(template, 0, 0, canvas.width, canvas.height);
          }
        };
      });
    };

  }, []);

  const downloadImage = async () => {
    setLoading(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    try {
      const {url, method} = services.photo.upload();


      await client({
        url,
        method,
        data: {
          image: canvas.toDataURL("image/png"),
        }
      }).then((res) => {
        const {data: data} = res
        router.push(`/get-qr/${data.data.id}`); // Ganti dengan ID atau path yang sesuai
      });


    } catch(err) {
      if (err instanceof AxiosError) {
        console.log(err.response?.data);
      }
    }


  };

  return (
    <main className="flex-1 flex items-center justify-center px-4 py-8">
      <div className="max-w-6xl px-10 flex flex-col gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col justify-center items-center text-center lg:text-left space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Photo Captured <span className="text-[#3E08AB]">Successfully!</span>
          </h1>

          <p className="text-lg text-gray-300 text-center max-w-md mx-auto lg:mx-0">
            Post your photo and don't forget to tag @sicodev.unsil
          </p>

          <div className="flex  gap-4 justify-center lg:justify-start">
            <Button
              onClick={downloadImage}
              disabled={isLoading}
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-full cursor-pointer"
            >
              {isLoading ? "Loading..." : "Download Photo"}
            </Button>

            <Button
              onClick={() => router.push("/capture")}
              size="lg"
              className="bg-transparent border border-gray-500 hover:bg-gray-100/30 px-10 py-3 text-lg font-semibold rounded-full cursor-pointer"
            >
              Retake
            </Button>
          </div>
        </div>
        

        {/* Right Side - Photobooth Strip */}
        <div className="flex justify-center lg:justify-end">
          {JSON.stringify(imgUrl)}
          <div className="relative">
            <canvas ref={canvasRef} className="border rounded-lg shadow-lg" />
          </div>
        </div>

      </div>
    </main>
  );
};

export default SuccessPage;
