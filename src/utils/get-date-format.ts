import { isDate } from 'validator';

export function getDateFormat(value: Date, format?: string) {
  if (!isDate(value.toString())) {
    return 'Invalid Date';
  }

  const _format = format || 'en-UK';

  return new Intl.DateTimeFormat(_format).format(value);
}
