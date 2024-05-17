import { Hotel } from "@mui/icons-material";

export type Hotel = {
  id: string;
  rooms: Room[];
};

export type Room = {
  id: string;
  name: string;
  bookings: Booking[];
};

export type Booking = {
  id: string;
  roomId: string;
  guest: Guest;
  dateFrom: string;
  dateTo: string;
};

export type Guest = {
  phone: string;
  name: string;
};

const guest1: Guest = {
  phone: "918 219 10 20",
  name: "Галя Иванкова",
};

const booking11: Booking = {
  id: "asd1233",
  roomId: "1233",
  guest: guest1,
  dateFrom: "1715904000000",
  dateTo: "1717545600000",
};

const booking12: Booking = {
  id: "asd123",
  roomId: "1233",
  guest: guest1,
  dateFrom: "1718496000000",
  dateTo: "1719187200000",
};

const booking21: Booking = {
  id: "21asd",
  roomId: "2",
  guest: guest1,
  dateFrom: "1715346000000",
  dateTo: "1716548400000",
};

const booking22: Booking = {
  id: "22asd",
  roomId: "2",
  guest: guest1,
  dateFrom: "1716555600000",
  dateTo: "1716980400000",
};

const booking23: Booking = {
  id: "23asd",
  roomId: "2",
  guest: guest1,
  dateFrom: "1717592400000",
  dateTo: "1718438400000",
};

const booking31: Booking = {
  id: "31asd",
  roomId: "3",
  guest: guest1,
  dateFrom: "1717246800000",
  dateTo: "1717887600000",
};

const booking32: Booking = {
  id: "32asd",
  roomId: "3",
  guest: guest1,
  dateFrom: "1718110800000",
  dateTo: "1719644400000",
};

export const room1: Room = {
  id: "1233",
  name: "Двойка с удобствами",
  bookings: [booking11, booking12],
};

export const room2: Room = {
  id: "2233",
  name: "Тройка улучшенный стандарт",
  bookings: [booking21, booking22, booking23],
};

export const room3: Room = {
  id: "3233",
  name: "Четырехместный номер",
  bookings: [booking31, booking32],
};

export const hotel: Hotel = {
  id: "10101010",
  rooms: [room1, room2, room3],
};
