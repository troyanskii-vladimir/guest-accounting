import styles from './day-item.module.scss';


function DayItem(): JSX.Element {
  return (
    <div className={styles['item']}>
      Занято
    </div>
  );
}


export default DayItem;
