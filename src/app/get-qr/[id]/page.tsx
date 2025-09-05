"use client";

import { useParams } from "next/navigation";
import QRCode from "react-qr-code";

export default function Page() {
  const params = useParams<{ id: string }>();
  const id = params.id;

  return (
    <main className="flex justify-center flex-1 px-10 py-20 gap-8 relative">
      {/* Bagian kiri: Kamera + controls */}
      <div className="flex flex-1 flex-col items-center justify-center max-w-4xl relative">
        <div className="text-center text-white text-2xl font-semibold mb-4">
          <h3 className="font-bold">
            Pindai QR Code dibawah ini untuk mendownload Gambar
          </h3>
          
          <div className="flex w-full justify-center my-10 bg-white p-10 rounded-lg">
            <QRCode value={`${process.env.NEXT_PUBLIC_APP_URL}/download/${id}`} />
          </div>
        </div>
      </div>
    </main>
  );
}
