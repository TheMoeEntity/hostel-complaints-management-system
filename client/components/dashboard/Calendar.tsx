'use client'
import React, { useState } from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
  const [value, onChange] = useState<Date>(new Date());

  const onChangeAction = () => {

  }

  return (
      <Calendar className='calendar' onChange={onChangeAction} value={value} />
  );
};

export default CalendarComponent;
