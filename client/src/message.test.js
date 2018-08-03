import message from './message';

test('message', () => {
  expect(message()).toMatch('Hello! The current time is');
});
