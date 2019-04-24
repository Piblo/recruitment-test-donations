import { timeFormat } from 'd3';

export function formatDate(date) {
  const d = date instanceof Date
    ? date
    : new Date(date);

  return timeFormat('%d/%m/%Y')(d);
}

export function getCurrencySymbol(currencyCode) {
  if (!currencyCode) {
    return null;
  }

  const currencyMapping = {
    GBP: '£',
    EUR: '€'
  };

  return currencyMapping[currencyCode];
}
