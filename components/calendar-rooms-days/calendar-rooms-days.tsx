import { Room } from "@/constants/data";
import DayItem from "../day-item/day-item";
import styles from "./calendar-rooms-days.module.scss";

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
      {dates.map((item) => (
        <DayItem key={item} />
      ))}
    </div>
  );
}

export default CalendarRoomsDays;
