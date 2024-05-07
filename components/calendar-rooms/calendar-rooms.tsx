import CalendarItem from '../day-item/day-item';
import RoomItem from '../room-item/room-item';
import styles from './calendar-rooms.module.scss';


function CalendarRooms(): JSX.Element {
  return (
    <ul className={styles['list']}>
      <li>
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
      </li>
    </ul>
  );
}


export default CalendarRooms;
