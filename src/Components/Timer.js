import React, { useState, useEffect } from 'react';

 export default function CountdownTimer() {
  const [seconds, setSeconds] = useState(7200); // 2 hours in seconds

  useEffect(() => {
    let interval = null;
    if (seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [seconds]);

  const formatTime = (time) => {
      return time.toString().padStart(2, '0');
  }

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div className="countdown-timer">
      <span className="hours">{formatTime(hours)}</span>:
      <span className="minutes">{formatTime(minutes)}</span>:
      <span className="seconds">{formatTime(remainingSeconds)}</span>
    </div>
  );
}