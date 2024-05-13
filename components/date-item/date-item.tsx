"use client";

import styles from "./date-item.module.scss";

type DayItemProps = {
  date: string;
  todayDate: string;
};

function DateItem({ date, todayDate }: DayItemProps): JSX.Element {
  const active = date === todayDate;

  return (
    <div
      className={
        active
          ? `${styles["item"]} ${styles["item-active"]}`
          : `${styles["item"]}`
      }
    >
      {date.slice(0, 5)}
    </div>
  );
}

export default DateItem;
