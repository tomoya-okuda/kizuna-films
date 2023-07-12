'use client';

import React, { useState, useEffect, useCallback } from 'react';

type Props = {};

function CountDate({}: Props) {
  const [currentDate, setCurrentDate] = useState('');

  const getDayOfWeek = useCallback((date: Date) => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return daysOfWeek[date.getDay()];
  }, []);

  useEffect(() => {
    const date = new Date();
    const formattedDate = `${date.getFullYear()}/${
      date.getMonth() + 1
    }/${date.getDate()}.${getDayOfWeek(date)}`;
    setCurrentDate(formattedDate);
  }, [getDayOfWeek]);

  return (
    <>
      <h5>{currentDate}</h5>
    </>
  );
}

export default CountDate;
