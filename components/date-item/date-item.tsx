"use client";

import styles from "./date-item.module.scss";

type DayItemProps = {
  text?: string;
};

function DateItem({ text }: DayItemProps): JSX.Element {
  return (
    <div className={styles["item"]}>
      {text && <p>{text}</p>}
      {!text && <p>Датакк</p>}
    </div>
  );
}

export default DateItem;
