import { safeGetItem, safeSetItem, safeRemoveItem } from '../storage';

describe('storage.js', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  describe('safeGetItem', () => {
    test('returns parsed JSON when key exists', () => {
      localStorage.setItem('test-key', JSON.stringify({ name: 'Book' }));
      const result = safeGetItem('test-key');
      expect(result).toEqual({ name: 'Book' });
    });

    test('returns fallback when key does not exist', () => {
      const fallback = { default: true };
      const result = safeGetItem('non-existent', fallback);
      expect(result).toEqual(fallback);
    });

    test('returns null fallback when key does not exist and no fallback provided', () => {
      const result = safeGetItem('non-existent');
      expect(result).toBeNull();
    });

    test('returns fallback on JSON parse error', () => {
      localStorage.setItem('bad-json', 'not valid json');
      const fallback = [];
      const result = safeGetItem('bad-json', fallback);
      expect(result).toEqual(fallback);
    });

    test('handles array storage', () => {
      const arr = [1, 2, 3];
      localStorage.setItem('arr-key', JSON.stringify(arr));
      const result = safeGetItem('arr-key');
      expect(result).toEqual(arr);
    });
  });

  describe('safeSetItem', () => {
    test('returns true on successful set', () => {
      const result = safeSetItem('test-key', { value: 42 });
      expect(result).toBe(true);
      expect(localStorage.getItem('test-key')).toBe(JSON.stringify({ value: 42 }));
    });

    test('stores serializable objects', () => {
      const obj = { cart: [{ id: 1, qty: 2 }], total: 29.99 };
      const success = safeSetItem('cart-key', obj);
      expect(success).toBe(true);
      expect(JSON.parse(localStorage.getItem('cart-key'))).toEqual(obj);
    });

    test('returns false when localStorage throws (quota exceeded)', () => {
      const spy = jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
        throw new Error('QuotaExceededError');
      });
      const result = safeSetItem('test-key', { data: 'large' });
      expect(result).toBe(false);
      spy.mockRestore();
    });

    test('handles null and undefined gracefully', () => {
      expect(safeSetItem('null-key', null)).toBe(true);
      expect(safeSetItem('undef-key', undefined)).toBe(true);
      expect(safeGetItem('null-key')).toBeNull();
      expect(safeGetItem('undef-key')).toBeUndefined();
    });
  });

  describe('safeRemoveItem', () => {
    test('removes an existing key and returns true', () => {
      localStorage.setItem('to-remove', 'value');
      const result = safeRemoveItem('to-remove');
      expect(result).toBe(true);
      expect(localStorage.getItem('to-remove')).toBeNull();
    });

    test('returns true even if key does not exist', () => {
      const result = safeRemoveItem('non-existent');
      expect(result).toBe(true);
    });

    test('returns false when localStorage throws', () => {
      const spy = jest.spyOn(Storage.prototype, 'removeItem').mockImplementation(() => {
        throw new Error('Storage error');
      });
      const result = safeRemoveItem('test-key');
      expect(result).toBe(false);
      spy.mockRestore();
    });
  });
});
