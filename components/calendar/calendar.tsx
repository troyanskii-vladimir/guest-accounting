"use client";
import React, { useRef } from "react";
import styles from "./calendar.module.scss";
import { useDraggable } from "react-use-draggable-scroll";
import CalendarRooms from "../calendar-rooms/calendar-rooms";
import CalendarRoomsDays from "../calendar-rooms-days/calendar-rooms-days";
import container from "@/styles/container.module.scss";
import CalendarDays from "../calendar-days/calendar-days";
import { hotel } from "@/constants/data";

function Calendar(): JSX.Element {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref, {
    activeMouseButton: "Left",
  });

  const todayDate = new Date();

  const datesMay = Array.from(
    { length: 31 },
    (_, i) => new Date(`05.${i + 1}.2024`),
  );
  const datesJune = Array.from(
    { length: 30 },
    (_, i) => new Date(`06.${i + 1}.2024`),
  );
  const datesJuly = Array.from(
    { length: 31 },
    (_, i) => new Date(`07.${i + 1}.2024`),
  );
  const datesAugust = Array.from(
    { length: 31 },
    (_, i) => new Date(`08.${i + 1}.2024`),
  );
  const dates = [...datesMay, ...datesJune, ...datesJuly, ...datesAugust];

  return (
    <div className={container["main-container"]}>
      <div className={styles["calendar"]}>
        <CalendarRooms hotelData={hotel} />
        <div className={styles["days"]} ref={ref} {...events}>
          <CalendarDays dates={dates} todayDate={todayDate} />
          {hotel.rooms.map((room) => (
            <CalendarRoomsDays roomData={room} key={room.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
