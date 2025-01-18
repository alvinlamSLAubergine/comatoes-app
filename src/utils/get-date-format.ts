export function getDateFormat(value: Date, format?: string) {
  const dateString = value.toDateString();
  if (dateString === 'Invalid Date') {
    return 'Invalid Date';
  }

  const _format = format || 'en-UK';

  return new Intl.DateTimeFormat(_format).format(value);
}
