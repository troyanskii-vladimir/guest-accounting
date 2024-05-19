"use client";
import { Room } from "@/constants/data";
import { useEffect, useRef } from "react";
import styles from "./calendar-rooms-days.module.scss";
import dynamic from "next/dynamic";
const DBooking = dynamic(() => import("../day-item/day-item"), { ssr: false });

type CalendarRoomsDaysProps = {
  roomData: Room;
};

function CalendarRoomsDays({ roomData }: CalendarRoomsDaysProps): JSX.Element {
  return (
    <div className={styles["rooms-days"]}>
      {roomData.bookings.map((booking, i, arr) => (
        <DBooking key={booking.id} booking={booking} bookingLeft={arr[i - 1]} />
      ))}
    </div>
  );
}

export default CalendarRoomsDays;
