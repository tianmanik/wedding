export interface GuestInfo {
  name: string;
  event: string;
  rsvp: string | number;
}

export interface EventDetails {
  title: string;
  date: string;
  time: string;
  location: string;
  mapUrl: string;
}

export interface CountdownResult {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}