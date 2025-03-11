export function monthDiff(dateFrom: Date, dateTo: Date): number {
  const diff = dateTo.getMonth() - dateFrom.getMonth() + 12 * (dateTo.getFullYear() - dateFrom.getFullYear());
  if (dateTo.getDate() >= dateFrom.getDate()) {
    return diff + 1;
  }

  return diff;
}

export function yearDiff(dateFrom: Date, dateTo: Date): number {
  const diff = dateTo.getFullYear() - dateFrom.getFullYear();
  if (dateTo.getMonth() > dateFrom.getMonth()) {
    return diff + 1;
  }

  if (dateTo.getMonth() === dateFrom.getMonth() && dateTo.getDate() >= dateFrom.getDate()) {
    return diff + 1;
  }

  return diff;
}
