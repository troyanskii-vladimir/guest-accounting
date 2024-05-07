'use client'
import Container from '@mui/material/Container'
import styles from './header.module.scss'
import container from '@/styles/container.module.scss'
import Button from '@mui/material/Button'
import Image from 'next/image'
import Stack from '@mui/material/Stack'
import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'

function Header() {
  return (
    <header className={styles['header']}>
      <div
        className={`${container['main-container']} ${styles['header__container']}`}
      >
        <div className={styles['title']}>
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
        </div>

        <Stack spacing={'32px'} direction='row'>
          <IconButton>
            <Badge badgeContent={5} color='secondary'>
              <Image
                src='./img/icons/icon-search.svg'
                width={24}
                height={24}
                alt='Поиск'
              />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={4} color='secondary'>
              <Image
                src='./img/icons/icon-heart.svg'
                width={24}
                height={24}
                alt='Избранное'
              />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={4} color='secondary'>
              <Image
                src='./img/icons/icon-compare-add.svg'
                width={24}
                height={24}
                alt='Сравнение'
              />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={4} color='secondary'>
              <Image
                src='./img/icons/icon-cart.svg'
                width={24}
                height={24}
                alt='Корзина'
              />
            </Badge>
          </IconButton>
        </Stack>
      </div>
    </header>
  )
}

export default Header
