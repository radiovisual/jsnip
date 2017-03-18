import test from 'ava';
import fn from './';

test('action', async (t) => {
  const data = await fn('action');
  t.is(typeof data, 'string');
  t.true(data.search('export default ClassName;') > -1);
});

test('reducer', async (t) => {
  const data = await fn('reducer');
  t.is(typeof data, 'string');
  t.true(data.search('export default ClassName;') > -1);
});

test('function', async (t) => {
  const data = await fn('function');
  t.is(typeof data, 'string');
  t.true(data.search('export default ClassName;') > -1);
});

test('class', async (t) => {
  const data = await fn('class');
  t.is(typeof data, 'string');
  t.true(data.search('export default ClassName;') > -1);
});

test('custom action', async (t) => {
  const data = await fn('action', { name: 'Foo' });
  t.is(typeof data, 'string');
  t.true(data.search('export default Foo;') > -1);
});

test('custom reducer', async (t) => {
  const data = await fn('reducer', { name: 'Foo' });
  t.is(typeof data, 'string');
  t.true(data.search('export default Foo;') > -1);
});

test('custom function', async (t) => {
  const data = await fn('function', { name: 'Foo' });
  t.is(typeof data, 'string');
  t.true(data.search('export default Foo;') > -1);
});

test('custom class', async (t) => {
  const data = await fn('class', { name: 'Foo' });
  t.is(typeof data, 'string');
  t.true(data.search('export default Foo;') > -1);
});

test('lorem', async (t) => {
  const data = await fn('lorem');
  t.is(typeof data, 'string');
  t.true(data.search('Lorem ipsum dolor sit amet') > -1);
});

test('reports unknown parameters', async (t) => {
  const data = await fn('foobarstuff');
  t.is(data, 'There is no snippet by the name foobarstuff');
});
