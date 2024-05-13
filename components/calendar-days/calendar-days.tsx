import DateItem from "../date-item/date-item";
import DayItem from "../day-item/day-item";
import styles from "./calendar-days.module.scss";

function CalendarDays({ dates }: CalendarDaysProps): JSX.Element {
  return (
    <div className={styles["days"]}>
      <DateItem text="Дата" />
      <DateItem text="Дата" />
      <DateItem text="Дата" />
      <DateItem text="Дата" />
      <DateItem text="Дата" />
      <DateItem />
      <DateItem />
    </div>
  );
}

export default CalendarDays;
