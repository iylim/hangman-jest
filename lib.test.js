const { stringify } = require('./lib');

test('stringify should convert an arbitrary string array to a string', () => {
  const stringArray = ['h', 'e', 'l', 'l', 'o'];
  const result = stringify(stringArray);

  expect(result).toBe('hello');
});
