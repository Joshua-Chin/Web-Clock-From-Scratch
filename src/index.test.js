import { message } from './index';

test('message', () => {
  expect(message()).toMatch('Hello Project');
});