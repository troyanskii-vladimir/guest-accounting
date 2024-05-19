import styles from "./room-item.module.scss";

type RoomItemProps = {
  name: string;
};

function RoomItem({ name }: RoomItemProps): JSX.Element {
  return <div className={styles["item"]}>{name}</div>;
}

export default RoomItem;
