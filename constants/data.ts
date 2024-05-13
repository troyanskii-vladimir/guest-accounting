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

const booking1: Booking = {
  id: "asd1233",
  roomId: "1233",
  guest: guest1,
  dateFrom: "1715904000000",
  dateTo: "1717545600000",
};

const booking2: Booking = {
  id: "asd123",
  roomId: "1233",
  guest: guest1,
  dateFrom: "1718496000000",
  dateTo: "1719187200000",
};

export const room1: Room = {
  id: "1233",
  name: "Двойка с удобствами",
  bookings: [booking1, booking2],
};
