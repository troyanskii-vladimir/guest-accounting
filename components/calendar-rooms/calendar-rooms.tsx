import { Hotel } from "@/constants/data";
import CalendarItem from "../day-item/day-item";
import RoomItem from "../room-item/room-item";
import styles from "./calendar-rooms.module.scss";

type CalendarRoomsProps = {
  hotelData: Hotel;
};

function CalendarRooms({ hotelData }: CalendarRoomsProps): JSX.Element {
  console.log(hotelData);
  return (
    <div className={styles["rooms"]}>
      <ul className={styles["list"]}>
        {hotelData.rooms.map((room) => (
          <li key={room.id}>
            <RoomItem name={room.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CalendarRooms;
