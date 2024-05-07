'use client'
import { AppRoute } from '@/constants/config'
import styles from './header.module.scss'
import container from '@/styles/container.module.scss'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <header className={styles['header']}>
      <div
        className={`${container['main-container']} ${styles['header__container']}`}
      >
        <Link href={AppRoute.Main} className={styles['title']}>
          <Image
            src='./img/icons/icon-logo.svg'
            width={50}
            height={50}
            alt='Логотип'
          />
          <span className={styles['title-text']}>Резервиум</span>
          <span className={styles['title-comment']}>
            Управляй отелем онлайн
          </span>
        </Link>
        <nav className={styles['nav-links']}>
          <Link
            className={`${styles['btn']} ${styles['btn-login']}`}
            href={AppRoute.Login}
          >
            Вход
          </Link>
          <Link
            className={`${styles['btn']} ${styles['btn-register']}`}
            href={AppRoute.Register}
          >
            Регистрация
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
