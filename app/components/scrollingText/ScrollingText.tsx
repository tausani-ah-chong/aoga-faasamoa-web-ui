'use client';

import React, { useEffect, useRef } from 'react';

export const ScrollingText: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (textRef.current && textContainerRef.current) {
        const containerWidth = textContainerRef.current.offsetWidth;
        const textWidth = textRef.current.offsetWidth;

        textRef.current.scrollLeft += 1;

        if (textRef.current.scrollLeft >= textWidth - containerWidth) {
          textRef.current.scrollLeft = 0;
        }
      }
    }, 10);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      ref={textContainerRef}
      className="overflow-hidden whitespace-nowrap text-scrolling pt-16"
      style={{ width: '100vw' }}
    >
      <div ref={textRef} className="inline-block animate-scroll text-5xl">
        <span>&nbsp;&nbsp;&nbsp;&nbsp;Talofa Lava&nbsp;&nbsp;&nbsp;&nbsp;Talofa Lava&nbsp;&nbsp;&nbsp;&nbsp;Talofa Lava&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;Talofa Lava&nbsp;&nbsp;&nbsp;&nbsp;Talofa Lava&nbsp;&nbsp;&nbsp;&nbsp;Talofa Lava&nbsp;&nbsp;&nbsp;&nbsp;</span>
      </div>
    </div>
  );
};