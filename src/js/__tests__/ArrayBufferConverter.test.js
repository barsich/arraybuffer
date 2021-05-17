import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

test('ArrayBufferConverter', () => {
  const converter = new ArrayBufferConverter();
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  converter.load(getBuffer());
  expect(converter.toString()).toBe(data);
});
