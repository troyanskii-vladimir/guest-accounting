import dynamic from "next/dynamic";
import styles from "./calendar-days.module.scss";
const Test = dynamic(() => import("../date-item/date-item"), { ssr: false });

type CalendarDaysProps = {
  dates: Date[];
  todayDate: Date;
};

function CalendarDays({ dates, todayDate }: CalendarDaysProps): JSX.Element {
  return (
    <div className={styles["days"]}>
      {dates.map((item) => (
        <Test date={item} todayDate={todayDate} key={item} />
      ))}
    </div>
  );
}

export default CalendarDays;
