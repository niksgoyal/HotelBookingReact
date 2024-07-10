import React, { useEffect, useRef } from "react";
import "./HomeStyle.css"; // Import your custom CSS file
import Navbar from "./Navbar";
export default function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Auto-play the video when the component is mounted
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.error("Error attempting to play video:", error);
      });
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="video-container">
        <video
          ref={videoRef}
          src={`/videoplayback.mp4`} // Path to your video file in the public directory
          muted
          autoPlay
          loop
          className="fullscreen-video"
        />
      </div>
    </>
  );
}
