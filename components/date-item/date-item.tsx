"use client";

import { useEffect, useRef } from "react";
import styles from "./date-item.module.scss";

type DayItemProps = {
  date: string;
  todayDate: string;
};

function DateItem({ date, todayDate }: DayItemProps): JSX.Element {
  const active = date === todayDate;
  const ref = useRef(null);
  const test = () => {
    console.log("test");
    console.log(ref.current);
    ref?.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start",
    });
  };

  useEffect(() => {
    if (active) {
      setTimeout(() => test(), 1000);
    }
  }, []);

  return (
    <div
      ref={active ? ref : null}
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
