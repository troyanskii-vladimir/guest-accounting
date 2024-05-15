"use client";

import { Booking } from "@/constants/data";
import styles from "./day-item.module.scss";
import { TIME_ONE_DAY, BASE_TIME } from "@/constants/const";

type DayItemProps = {
  booking: Booking;
  bookingLeft?: Booking;
};

function DayItem({ booking, bookingLeft }: DayItemProps): JSX.Element {
  const bookingDays =
    (Number(booking.dateTo) - Number(booking.dateFrom)) / TIME_ONE_DAY;
  const fullDays = Math.floor(bookingDays);
  const bookingLength = bookingDays * 70 + fullDays * 10;

  function formatDateFromTimeStamp(timestamp: string) {
    const date = new Date(Number(timestamp));
    return date.toLocaleDateString();
  }

  const timeFromPreviousBooking = bookingLeft
    ? (Number(booking.dateFrom) - Number(bookingLeft.dateTo)) / TIME_ONE_DAY
    : (Number(booking.dateFrom) - BASE_TIME) / TIME_ONE_DAY;
  const timeFullDays = Math.floor(timeFromPreviousBooking);
  const timeLength = timeFromPreviousBooking * 70 + timeFullDays * 10;
  console.log();

  return (
    <div
      className={styles["item"]}
      style={{ minWidth: `${bookingLength}px`, marginLeft: `${timeLength}px` }}
    >
      <div style={{ position: "absolute" }}>
        <p>{booking.guest.name}</p>
        <p>От: {formatDateFromTimeStamp(booking.dateFrom)}</p>
      </div>
    </div>
  );
}

export default DayItem;
