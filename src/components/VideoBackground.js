import React, { useState, useEffect, useRef } from 'react';

const VideoBackground = ({ 
  videoSrc, 
  fallbackGradient = "from-blue-900 via-purple-900 to-indigo-900",
  className = "absolute inset-0 w-full h-full object-cover"
}) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setVideoLoaded(true);
      video.play().catch(() => setVideoError(true));
    };

    const handleError = () => {
      setVideoError(true);
    };

    const handleCanPlay = () => {
      if (!videoLoaded) {
        video.play().catch(() => setVideoError(true));
      }
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);
    video.addEventListener('canplay', handleCanPlay);

    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && video.preload === 'none') {
            video.preload = 'metadata';
            video.load();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(video);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
      video.removeEventListener('canplay', handleCanPlay);
      observer.disconnect();
    };
  }, [videoLoaded]);

  if (videoError) {
    return (
      <div className={`bg-gradient-to-br ${fallbackGradient} ${className}`} />
    );
  }

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className={className}
        style={{ display: videoError ? 'none' : 'block' }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      {!videoLoaded && !videoError && (
        <div className={`bg-gradient-to-br ${fallbackGradient} ${className}`} />
      )}
    </>
  );
};

export default VideoBackground;
