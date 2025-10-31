"use client";

import { useState, useRef } from "react";

export default function VideoPlayer({ videoUrl, thumbnail }) {
  const [showVideo, setShowVideo] = useState(false);
  const iframeRef = useRef(null);

  const handlePlayClick = () => {
    setShowVideo(true);
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
    <div className="video-container relative aspect-video w-full overflow-hidden rounded-lg bg-black">
      {showVideo ? (
        <div className="w-full h-full">
          <iframe
            ref={iframeRef}
            src={embedUrl}
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <>
          {/* Thumbnail */}
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${thumbnail})` }}
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <button
              onClick={handlePlayClick}
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

          {/* Loading indicator for when video is loading */}
          {showVideo && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
