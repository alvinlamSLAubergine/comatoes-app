export function getCurrencyFormat(value: number, format?: string, currency?: string) {
  const _format = format || 'en-US';
  const _currency = currency || 'SGD';

  return new Intl.NumberFormat(_format, {
    style: 'currency',
    currency: _currency,
    currencyDisplay: 'narrowSymbol',
  }).format(value);
}
