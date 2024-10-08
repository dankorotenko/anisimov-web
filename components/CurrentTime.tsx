"use client"
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Helper to get London time
const getLondonTime = () => {
  const now = new Date();
  const utcOffset = now.getTimezoneOffset(); // Minutes offset from UTC
  const londonOffset = 60; // London is currently at UTC+1 (adjust as needed)
  const londonTime = new Date(now.getTime() + (londonOffset - utcOffset) * 60000);
  return londonTime;
};

const CurrentTime = () => {
  const [time, setTime] = useState(getLondonTime());
  const colonRef = useRef(null); // Reference for the colon element

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getLondonTime());
    }, 1000);

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  // GSAP Blink Animation
  useEffect(() => {
    gsap.to(colonRef.current, {
      opacity: 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true, // Ensures it reverses the opacity change (blink effect)
      ease: 'power1.inOut', // Smooth easing for the blink
    });
  }, []);

  const hours = Number(time.getHours().toString().padStart(2, '0'));
  const minutes = time.getMinutes().toString().padStart(2, '0');

  const isAM = hours < 12;
  const displayHours = (hours % 12 || 12).toString().padStart(2, '0'); // Convert to 12-hour format

  return (
    <div className="hidden md:block col-start-9 col-end-13 font-clash uppercase font-bold text-text font-base text-right"> 
      LONDON, {displayHours}<span ref={colonRef}>:</span>{minutes} {isAM ? 'AM' : 'PM'}
    </div>
  );
};

export default CurrentTime;
