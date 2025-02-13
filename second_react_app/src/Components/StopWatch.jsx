import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0); 
  const [isRunning, setIsRunning] = useState(false); 
  const [isPaused, setIsPaused] = useState(false); 
  const [intervalId, setIntervalId] = useState(null); 

  useEffect(() => {
    if (isRunning && !isPaused) {
      const id = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000); 
      setIntervalId(id); 

     
      return () => clearInterval(id);
    }


    if (!isRunning || isPaused) {
      clearInterval(intervalId);
    }
  }, [isRunning, isPaused]); 

  const startStopwatch = () => {
    setTime(0); 
    setIsRunning(true); 
    setIsPaused(false); 
  };

  const stopStopwatch = () => {
    setIsRunning(false); 
    setTime(0); 
    setIsPaused(false); 
  };

 
  const pauseStopwatch = () => {
    setIsRunning(false);
    setIsPaused(true); 
  };

  const resumeStopwatch = () => {
    setIsRunning(true); 
    setIsPaused(false);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <div>
        <p>{time} seconds</p>
      </div>
      <div>
        {!isRunning && !isPaused && (
          <button onClick={startStopwatch}>Start</button>
        )}
        {isRunning && !isPaused && (
          <>
            <button onClick={pauseStopwatch}>Pause</button>
            <button onClick={stopStopwatch}>Stop</button>
          </>
        )}
        {!isRunning && isPaused && (
          <>
            <button onClick={resumeStopwatch}>Resume</button>
            <button onClick={stopStopwatch}>Stop</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Stopwatch;
