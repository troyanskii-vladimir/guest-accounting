"use client";
import React, { useRef } from "react";
import styles from "./calendar.module.scss";
import { useDraggable } from "react-use-draggable-scroll";
import { Container } from "@mui/material";
import CalendarRooms from "../calendar-rooms/calendar-rooms";
import CalendarRoomsDays from "../calendar-rooms-days/calendar-rooms-days";
import container from "@/styles/container.module.scss";
import CalendarDays from "../calendar-days/calendar-days";
import { room1 } from "@/constants/data";

function Calendar(): JSX.Element {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref, {
    activeMouseButton: "Left",
  });

  const dates = [
    "01.05.2024",
    "02.05.2024",
    "03.05.2024",
    "04.05.2024",
    "05.05.2024",
    "06.05.2024",
    "07.05.2024",
    "08.05.2024",
    "09.05.2024",
    "10.05.2024",
    "11.05.2024",
    "12.05.2024",
    "13.05.2024",
    "14.05.2024",
    "15.05.2024",
    "16.05.2024",
    "17.05.2024",
    "18.05.2024",
    "19.05.2024",
    "20.05.2024",
    "21.05.2024",
    "22.05.2024",
    "23.05.2024",
    "24.05.2024",
    "25.05.2024",
    "26.05.2024",
    "27.05.2024",
    "28.05.2024",
    "29.05.2024",
    "30.05.2024",
    "31.05.2024",
    "01.06.2024",
    "02.06.2024",
    "03.06.2024",
    "04.06.2024",
    "05.06.2024",
    "06.06.2024",
    "07.06.2024",
    "08.06.2024",
    "09.06.2024",
    "10.06.2024",
    "11.06.2024",
    "12.06.2024",
    "13.06.2024",
    "14.06.2024",
    "15.06.2024",
    "16.06.2024",
    "17.06.2024",
    "18.06.2024",
    "19.06.2024",
    "20.06.2024",
    "21.06.2024",
    "22.06.2024",
    "23.06.2024",
    "24.06.2024",
    "25.06.2024",
    "26.06.2024",
    "27.06.2024",
    "28.06.2024",
    "29.06.2024",
    "30.06.2024",
  ];

  
  
  return(
    <div className={container["main-container"]}>
      <div className={styles["calendar"]}>
        <div className={styles["rooms"]}>
          <CalendarRooms />
        </div>
        <div className={styles["days"]} ref={ref} {...events}>
          <CalendarDays dates={dates} todayDate={"14.05.2024"} />
          <CalendarRoomsDays roomData={room1} days={dates.length} />
          <CalendarRoomsDays roomData={room1} days={dates.length} />
          <CalendarRoomsDays roomData={room1} days={dates.length} />
          <CalendarRoomsDays roomData={room1} days={dates.length} />
          <CalendarRoomsDays roomData={room1} days={dates.length} />
        </div>
      </div>
    </div>,
  );
}

export default Calendar;
