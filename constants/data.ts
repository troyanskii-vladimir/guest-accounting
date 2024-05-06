export type Hotel = {
  id: string,
  rooms: Room[],
}

export type Room = {
  id: string;
  bookings: Booking[];
}

export type Booking = {
  id: string;
  roomId: string;
  guest: Guest;
  dateFrom: string;
  dateTo: string;
}

export type Guest = {
  phone: string;
  name: string;
}

const guest1: Guest = {
  phone: '918 219 17 23',
  name: 'Галя Иванкова',
}

const booking1: Booking = {
  id: 'asd1233',
  roomId: '1233',
  guest: guest1,
  dateFrom: '1700251003843',
  dateTo: '1700821093843',
}

const booking2: Booking = {
  id: 'asd123',
  roomId: '1233',
  guest: guest1,
  dateFrom: '1700851003843',
  dateTo: '1700851093843',
}

const room1: Room = {
  id: '1233',
  bookings: [booking1, booking2],
}


