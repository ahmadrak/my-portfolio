"use client";

import { useState } from "react";

export default function ImageCarousel({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) return null;

  const goPrev = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const goNext = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="mt-8">
      <h2 className="font-semibold text-xl mb-4">Project Screenshots:</h2>

      <div className="relative rounded-lg overflow-hidden border shadow-lg bg-gray-100">
        <img
          src={images[current]}
          alt={`${alt} screenshot ${current + 1}`}
          className="w-full h-auto max-h-[520px] object-contain bg-gray-100"
        />

        {images.length > 1 && (
          <>
            {/* Prev arrow */}
            <button
              onClick={goPrev}
              aria-label="Previous screenshot"
              className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Next arrow */}
            <button
              onClick={goNext}
              aria-label="Next screenshot"
              className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Counter */}
            <div className="absolute bottom-3 right-3 px-2 py-1 rounded-md bg-black/50 text-white text-xs">
              {current + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to screenshot ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition ${
                i === current ? "bg-gray-800" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
