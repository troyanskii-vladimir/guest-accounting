"use client";

import styles from "./day-item.module.scss";

type DayItemProps = {
  text?: string;
};

function DayItem({ text }: DayItemProps): JSX.Element {
  return (
    <div className={styles["item"]}>
      {text && <p>{text}</p>}
      {!text && <p>Занято</p>}
    </div>
  );
}

export default DayItem;
