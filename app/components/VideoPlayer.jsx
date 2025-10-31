"use client";

import { useState } from "react";

export default function VideoPlayer({ videoUrl, thumbnail }) {
  const [showModal, setShowModal] = useState(false);

  const handlePlayClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Extract video ID from Vimeo URL
  const getVimeoId = (url) => {
    const match = url.match(/(?:vimeo\.com\/|video\/)(\d+)/);
    return match ? match[1] : null;
  };

  const videoId = getVimeoId(videoUrl);
  const embedUrl = videoId
    ? `https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`
    : "";

  return (
    <>
      {/* Thumbnail with Play Button */}
      <div className="video-container relative aspect-video w-full overflow-hidden rounded-lg bg-black cursor-pointer">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${thumbnail})` }}
        />

        {/* Play Button Overlay */}
        <div
          className="absolute inset-0 bg-black/30 flex items-center justify-center"
          onClick={handlePlayClick}
        >
          <button
            className="play-button bg-white/90 hover:bg-white rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            aria-label="Play video"
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8 text-blue-600 ml-1 group-hover:text-blue-700 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl mx-4">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Close video"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Video Container */}
            <div className="relative aspect-video w-full bg-black rounded-lg overflow-hidden">
              <iframe
                src={embedUrl}
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
