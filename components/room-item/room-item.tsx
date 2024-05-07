import styles from './room-item.module.scss';


function RoomItem(): JSX.Element {
  return (
    <div className={styles['item']}>
      Номер стандарт
    </div>
  );
}


export default RoomItem;
