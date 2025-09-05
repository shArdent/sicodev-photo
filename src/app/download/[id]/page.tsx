"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { services } from "@/lib/services";
import { AxiosError } from "axios";
import client from "@/lib/services/client";
import { Button } from "@/components/ui/button";

export default function Page() {
  const params = useParams<{ id: string }>();
  const [imgUrl, setImgUrl] = useState<string|null>(null);

  const getImage = async (id: string) => {
    try {
      const {url, method} = services.photo.getById(id);

      await client({
        url,
        method
      }).then((res) => {
        const {data: data} = res;
        console.log(data.data);
        setImgUrl(data.data.image);
      });
    } catch (err) {
      if (err instanceof AxiosError) {
        console.log(err.response?.data);
      }
    }
  };
  const downloadImage = () => {
    if (!imgUrl) return;

    fetch(imgUrl)
      .then(res => res.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "photobooth.png";
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
      });
  }

  useEffect(() => {
    const id = params.id;
    if (id) {
      getImage(id);
    }
  }, [params.id]);

  return (
     <main className="flex-1 flex items-center justify-center px-4 py-8">
      <div className="max-w-6xl px-10 flex flex-col gap-12 items-center">
      {imgUrl ? (
        <img src={imgUrl} alt="Photobooth Image Result" />
      ) : (
        <p>Loading...</p>
      )}

      {
        imgUrl && (
          <div className="flex  gap-4 justify-center lg:justify-start">
            <Button
              onClick={downloadImage}
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-full cursor-pointer"
            >
              Download Photo
            </Button>
          </div>
        )
      }
    </div>
    </main>
  );
}
