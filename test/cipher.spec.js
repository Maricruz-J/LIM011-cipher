global.window = global;
require('../src/cipher');

describe('cipher', () => {
  it('debería ser un object', () => {
    expect(typeof cipher).toBe('object');
  });
  describe('cipher.encode', () => {
    it('debería ser una función', () => {
      expect(typeof cipher.encode).toBe('function');
    });
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      expect(cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 33)).toBe('HIJKLMNOPQRSTUVWXYZABCDEFG');
    });
    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
      expect(cipher.encode('abcdefghijklmnopqrstuvwxyz', 33)).toBe('hijklmnopqrstuvwxyzabcdefg');
    });
    it('debería retornar "4567890123" para "1234567890" con offset 33', () => {
      expect(cipher.encode('1234567890', 33)).toBe('4567890123');
    });
    it('debería retornar " !@" para " !@"', () => {
      expect(cipher.encode(' !@', 33)).toBe(' !@');
    });
  })
  describe('cipher.decode', () => {
    it('debería ser una función', () => {
      expect(typeof cipher.decode).toBe('function');
    });
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      expect(cipher.decode('HIJKLMNOPQRSTUVWXYZABCDEFG', 33)).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', () => {
      expect(cipher.decode('hijklmnopqrstuvwxyzabcdefg', 33)).toBe('abcdefghijklmnopqrstuvwxyz');
    });
    it('debería retornar "1234567890" para "4567890123" con offset 33', () => {
      expect(cipher.decode('4567890123', 33)).toBe('1234567890');
    });
    it('debería retornar " !@" para " !@"', () => {
      expect(cipher.decode(' !@', 33)).toBe(' !@');
    });
  });
});
