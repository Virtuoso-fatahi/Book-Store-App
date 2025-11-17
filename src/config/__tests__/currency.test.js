import { formatCurrency, APP_CURRENCY, SUPPORTED_CURRENCIES } from '../currency';

describe('currency.js', () => {
  test('APP_CURRENCY is one of the supported currencies', () => {
    expect(SUPPORTED_CURRENCIES).toContain(APP_CURRENCY);
  });

  test('SUPPORTED_CURRENCIES includes NGN, GHS, USD, ZAR', () => {
    expect(SUPPORTED_CURRENCIES).toEqual(expect.arrayContaining(['NGN', 'GHS', 'USD', 'ZAR']));
  });

  describe('formatCurrency', () => {
    test('formats currency with correct symbol and locale', () => {
      // APP_CURRENCY defaults to ZAR if env is not set
      const formatted = formatCurrency(15.99);
      expect(typeof formatted).toBe('string');
      // ZAR locale should format with R prefix or similar
      expect(formatted).toMatch(/R|ZAR|15\.99/);
    });

    test('formats to 2 decimal places', () => {
      const formatted = formatCurrency(10);
      expect(formatted).toMatch(/10[\.,]00/);
    });

    test('handles large amounts', () => {
      const formatted = formatCurrency(1000000.50);
      expect(typeof formatted).toBe('string');
      expect(formatted.length).toBeGreaterThan(0);
    });

    test('handles small amounts', () => {
      const formatted = formatCurrency(0.01);
      expect(typeof formatted).toBe('string');
      expect(formatted).toMatch(/0[\.,]01/);
    });

    test('handles edge case: zero', () => {
      const formatted = formatCurrency(0);
      expect(formatted).toMatch(/0[\.,]00/);
    });

    test('handles negative amounts (edge case)', () => {
      const formatted = formatCurrency(-25.50);
      expect(typeof formatted).toBe('string');
      expect(formatted).toMatch(/25\.50|-25/);
    });
  });
});
