"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

function VideoSection() {
  const videos = ["/test2.mp4", "/test3.mp4", "/test4.mp4", "/test7.mp4"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Simple mobile check (screen width based)
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    if (isHovering || isMobile) return;
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentIndex, videos.length, isHovering, isMobile]);

  return (
    <div className="w-full h-full overflow-hidden flex items-center justify-center">
      {isMobile ? (
        <Image
          src="/vi2.png" // Fallback image for mobile
          alt="Video placeholder"
          width={400}
          height={225}
          className="rounded-l-full w-full h-auto object-cover aspect-video"
        />
      ) : (
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
      )}
    </div>
  );
}
export default VideoSection;


