import React from "react";

export default function Youtube_video() {
  return (
    <div className="flex justify-center px-4 py-8">
      <div className="w-full max-w-6xl flex justify-center aspect-video">
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/UY3RR9OQSmU?si=z9jv9cVeoRijAj2K"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}