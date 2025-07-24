/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useEffect, useState } from "react";

function VideoSection() {
  const videos = ["/test2.mp4", "/test3.mp4", "/test4.mp4"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering) return;
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentIndex, videos.length, isHovering]);

  return (
    <div className="w-full h-full overflow-hidden">
      <video
        preload="none"
        autoPlay
        muted
        loop
        className="rounded-l-full w-full h-auto md:h-full object-cover aspect-video cursor-pointer"
        src={videos[currentIndex]}
        key={videos[currentIndex]}
        onClick={() =>
          setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length)
        }
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoSection;
