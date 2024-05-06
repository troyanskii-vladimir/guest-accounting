import Image from 'next/image'
import styles from './page.module.scss'
import Calendar from '@/components/modules/calendar/calendar';



export default function Home() {

  return (
    <main className={styles.main}>
      <h1>page</h1>
      <Calendar />
    </main>
  )
}
