"use client"
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Helper to get time for a given timezone
const getTimeForTimezone = (timezone) => {
  const now = new Date();
  // Use Intl.DateTimeFormat to convert to specific time zone with AM/PM
  const options = { timeZone: timezone, hour: '2-digit', minute: '2-digit', hour12: true };
  const formatter = new Intl.DateTimeFormat([], options);
  const timeParts = formatter.formatToParts(now);
  
  const hours = timeParts.find(part => part.type === 'hour').value;
  const minutes = timeParts.find(part => part.type === 'minute').value;
  const period = timeParts.find(part => part.type === 'dayPeriod').value; // AM/PM

  return { hours, minutes, period };
};

const CurrentTime = () => {
  const [time, setTime] = useState({ hours: '00', minutes: '00', period: 'AM' });
  const [location, setLocation] = useState(null); // Store user location info
  const colonRef = useRef(null); // Reference for the colon element

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch('https://ipinfo.io/json?token=750383186cae1f'); // Use your API token
        const data = await response.json();
        const { city, timezone } = data;

        if (city && timezone) {
          setLocation({ city, timezone });
          const newTime = getTimeForTimezone(timezone); // Get initial time for user's timezone
          setTime(newTime);
        } else {
          // Fallback to default location
          setLocation({ city: "London", timezone: "Europe/London" });
          const newTime = getTimeForTimezone("Europe/London");
          setTime(newTime);
        }
      } catch (error) {
        console.error("Error fetching IP data", error);
        setLocation({ city: "London", timezone: "Europe/London" }); // Default to London if error
        const newTime = getTimeForTimezone("Europe/London");
        setTime(newTime);
      }
    };

    fetchLocation();
  }, []);

  // Update time every second
  useEffect(() => {
    if (location) {
      const intervalId = setInterval(() => {
        const newTime = getTimeForTimezone(location.timezone);
        setTime(newTime);
      }, 1000);

      return () => clearInterval(intervalId); // Clean up on unmount
    }
  }, [location]);

  // GSAP Blink Animation
  useEffect(() => {
    gsap.to(colonRef.current, {
      opacity: 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });
  }, []);

  if (!location) {
    return <div className='hidden'>Loading...</div>;
  }

  return (
    <div className="hidden md:block col-start-9 col-end-13 font-clash uppercase font-bold text-text font-base text-right">
      {location.city.toUpperCase()}, {time.hours}<span ref={colonRef}>:</span>{time.minutes} {time.period}
    </div>
  );
};

export default CurrentTime;
