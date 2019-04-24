import { formatDate, getCurrencySymbol } from './formatting';

describe('formatDate', () => {
  it('Returns a date in the correct format', () => {
    const date = new Date('2019-04-23');
    const expectedFormat = '23/04/2019';

    const actualFormat = formatDate(date);

    expect(actualFormat).toEqual(expectedFormat);
  });

  it('Prepends days and months with 0 when they are lower than 10', () => {
    const date = new Date('2019-01-01');
    const expectedFormat = '01/01/2019';

    const actualFormat = formatDate(date);

    expect(actualFormat).toEqual(expectedFormat);
  });

  it('Handles date strings', () => {
    const date = '2019-04-23';
    const expectedFormat = '23/04/2019';

    const actualFormat = formatDate(date);

    expect(actualFormat).toEqual(expectedFormat);
  });
});

describe('getCurrencySymbol', () => {
  it('Returns the correct symbol for GBP', () => {
    const expectedSymbol = '£';
    const actualSymbol = getCurrencySymbol('GBP');
    expect(actualSymbol).toEqual(expectedSymbol);
  });

  it('Returns the correct symbol for EUR', () => {
    const expectedSymbol = '€';
    const actualSymbol = getCurrencySymbol('EUR');
    expect(actualSymbol).toEqual(expectedSymbol);
  });

  it('Returns null if no code is specified', () => {
    const expectedSymbol = null;
    const actualSymbol = getCurrencySymbol();
    expect(actualSymbol).toEqual(expectedSymbol);
  });
});
