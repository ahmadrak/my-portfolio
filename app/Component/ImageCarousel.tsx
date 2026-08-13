"use client";

import { useState } from "react";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}
export default function ImageCarousel({
  images,
  alt,
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  const goPrev = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };
//test
  return (
    <div className="mt-8">
      <h2 className="mb-4 text-xl font-semibold">
        Project Screenshots:
      </h2>

      <div className="relative overflow-hidden rounded-lg border bg-gray-100 shadow-lg">
        <img
          src={images[current]}
          alt={`${alt} screenshot ${current + 1}`}
          className="h-auto max-h-[520px] w-full object-contain bg-gray-100"
        />

        {images.length > 1 && (
          <>
            {/* Previous arrow */}
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous screenshot"
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-5 w-5"
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
              type="button"
              onClick={goNext}
              aria-label="Next screenshot"
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Counter */}
            <div className="absolute bottom-3 right-3 rounded-md bg-black/50 px-2 py-1 text-xs text-white">
              {current + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {/* Dots */}
      {images.length > 1 && (
        <div className="mt-3 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Go to screenshot ${index + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition ${
                index === current
                  ? "bg-gray-800"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
