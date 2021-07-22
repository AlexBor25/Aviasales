import { format } from "date-fns";

export function departure (date) {
  return format(new Date(date), 'HH:mm');
}

export function arrival (date, duration) {
  return format(new Date(new Date(date).getTime() + duration * 60000), 'HH:mm');
}

