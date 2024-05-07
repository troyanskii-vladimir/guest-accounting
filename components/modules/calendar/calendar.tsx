'use client'
import React, { useRef } from 'react'
import styles from './calendar.module.scss'
import { useDraggable } from 'react-use-draggable-scroll'
import { Container } from '@mui/material'
import CalendarRooms from '../calendar-rooms/calendar-rooms'
import CalendarRoomsDays from '../calendar-rooms-days/calendar-rooms-days'
import container from '@/styles/container.module.scss'

function Calendar(): JSX.Element {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>
  const { events } = useDraggable(ref, {
    activeMouseButton: 'Left',
  })
  return (
    <div className={container['main-container']}>
      <div className={styles['calendar']}>
        <div className={styles['rooms']}>
          <CalendarRooms />
        </div>
        <div className={styles['days']} ref={ref} {...events}>
          <CalendarRoomsDays />
          <CalendarRoomsDays />
          <CalendarRoomsDays />
          <CalendarRoomsDays />
          <CalendarRoomsDays />
          <CalendarRoomsDays />
        </div>
      </div>
    </div>
  )
}

export default Calendar
