import { StyledSmallText } from "../Report/report.styles";
import React from "react";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const isDigit = (number) => number < 10;
const getDateMinutes = (minute) =>
  isDigit(minute) ? `0${minute}` : minute;
const getWeekDayName = (day) => weekDays[day];
const getMonthName = (month) => monthNames[month];
const getClockTime = (date) =>
  `${date.getHours()}:${getDateMinutes(date.getMinutes())}`;

const formatDateTime = (dateTime) => {
  const date = new Date(dateTime);
  const nameOfDay = getWeekDayName(date.getDay());
  const day = date.getDate();
  const nameOfMonth = getMonthName(date.getMonth());
  const time = getClockTime(date);
  return `${nameOfDay}, ${day} ${nameOfMonth} - ${time}`;
};

const DateTime = ({ dateTime }) => {
  if (!dateTime) return null;

  return <StyledSmallText>{formatDateTime(dateTime)}</StyledSmallText>;
};

export default DateTime;
