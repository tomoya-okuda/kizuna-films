'use client';

import React, { useState, useEffect, useCallback } from 'react';

type Props = {};

function CountTime({}: Props) {
  const [currentTime, setCurrentTime] = useState('');

  const getCurrentTime = useCallback(() => {
    const formatTimeUnit = (unit: number) => {
      return unit < 10 ? `0${unit}` : unit.toString();
    };

    const date = new Date();
    const hours = formatTimeUnit(date.getHours());
    const minutes = formatTimeUnit(date.getMinutes());
    const seconds = formatTimeUnit(date.getSeconds());
    return `${hours} : ${minutes} : ${seconds}`;
  }, []);

  useEffect(() => {
    setCurrentTime(getCurrentTime());
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [getCurrentTime]);

  return (
    <>
      <h5>{currentTime}</h5>
    </>
  );
}

export default CountTime;
