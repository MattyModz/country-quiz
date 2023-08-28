import React from "react";
import { useState, useEffect } from "react";
export default function Timer() {
  const [totalSeconds, setTotalSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  if (hours > 0) {
    formattedTime = `${hours.toString().padStart(2, "0")}:${formattedTime}`;
  }

  return (
    <div className="grid content-center h-full font-semibold text-xl">
      {formattedTime}
    </div>
  );
}
