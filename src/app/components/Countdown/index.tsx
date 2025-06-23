"use client";
import { useEffect, useState } from "react";

export default function OfferCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const endDate = new Date("2025-08-31T23:59:59"); // Change as needed

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = endDate.getTime() - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="flex flex-col md:flex-row justify-between items-center bg-cyan-50 px-6 md:px-24 py-16"
      style={{
        backgroundImage: "url(/assets/bgimage.jpg)", // Add a background grid if needed
        backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    >
      {/* Left Text + Timer */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Grade A medical products for <br /> sale. Hurry!
        </h1>
        <p className="text-xl mt-4 font-semibold text-gray-700">
          Offer ends on
        </p>

        <div className="flex gap-4 justify-center md:justify-start mt-6">
          {["days", "hours", "minutes", "seconds"].map((unit) => (
            <div
              key={unit}
              className="bg-cyan-500 text-white px-4 py-3 rounded text-center w-[80px]"
            >
              <p className="text-2xl font-bold">
                {String(timeLeft[unit as keyof typeof timeLeft]).padStart(
                  2,
                  "0"
                )}
              </p>
              <span className="text-xs uppercase">{unit}</span>
            </div>
          ))}
        </div>

        <button className="mt-8 bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
          BUY NOW
        </button>
      </div>
    </section>
  );
}
