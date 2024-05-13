"use client";
import { Room } from "@/constants/data";
import { useRef } from "react";
import styles from "./calendar-rooms-days.module.scss";
import dynamic from "next/dynamic";
const DBooking = dynamic(() => import("../day-item/day-item"), { ssr: false });

type CalendarRoomsDaysProps = {
  roomData: Room;
  days: number;
};

function CalendarRoomsDays({
  roomData,
  days,
}: CalendarRoomsDaysProps): JSX.Element {
  const myRef = useRef(null);
  const test = () => {
    console.log("test");
    console.log(myRef.current);
    myRef.current.scrollIntoView();
  };

  return (
    <div className={styles["rooms-days"]}>
      <div onClick={test}>test</div>
      {roomData.bookings.map((booking, i, arr) => (
        <DBooking key={booking.id} booking={booking} bookingLeft={arr[i - 1]} />
      ))}
      {/* {dates.map((item) => (
        <DayItem key={item} />
      ))} */}
      <div ref={myRef}>testste</div>
    </div>
  );
}

export default CalendarRoomsDays;
