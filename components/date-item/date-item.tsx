"use client";

import { useEffect, useRef } from "react";
import styles from "./date-item.module.scss";

type DayItemProps = {
  date: Date;
  todayDate: Date;
};

function DateItem({ date, todayDate }: DayItemProps): JSX.Element {
  const active = date.toLocaleDateString() === todayDate.toLocaleDateString();
  let preActive = false;

  if (date.getMonth() === todayDate.getMonth()) {
    console.log(date.getDate());
    preActive = date.getDate() === todayDate.getDate() - 1;
  }

  const ref = useRef(null);
  const test = () => {
    ref?.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start",
    });
  };

  useEffect(() => {
    if (preActive) {
      setTimeout(() => test(), 300);
    }
  }, []);

  return (
    <div
      ref={preActive ? ref : null}
      className={
        active
          ? `${styles["item"]} ${styles["item-active"]}`
          : `${styles["item"]}`
      }
    >
      {date.toLocaleDateString().slice(0, 5)}
    </div>
  );
}

export default DateItem;
