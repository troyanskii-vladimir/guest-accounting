import { Room } from "@/constants/data";

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
  const dates = Array.from({ length: days }, (_, i) => i + 1);

  return (
    <div className={styles["rooms-days"]}>
      {roomData.bookings.map((booking, i, arr) => (
        <DBooking key={booking.id} booking={booking} bookingLeft={arr[i - 1]} />
      ))}
      {/* {dates.map((item) => (
        <DayItem key={item} />
      ))} */}
    </div>
  );
}

export default CalendarRoomsDays;
