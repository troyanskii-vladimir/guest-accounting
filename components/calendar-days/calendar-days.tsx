import DateItem from "../date-item/date-item";
import DayItem from "../day-item/day-item";
import styles from "./calendar-days.module.scss";

type CalendarDaysProps = {
  dates: string[];
  todayDate: string;
};

function CalendarDays({ dates, todayDate }: CalendarDaysProps): JSX.Element {
  return (
    <div className={styles["days"]}>
      {dates.map((item) => (
        <DateItem date={item} todayDate={todayDate} key={item} />
      ))}
    </div>
  );
}

export default CalendarDays;
