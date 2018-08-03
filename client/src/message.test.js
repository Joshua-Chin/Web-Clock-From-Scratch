import message from './message';

global.fetch = jest.fn()
  .mockImplementation(
    () => Promise.resolve({json: () => "today"})
  );

test('message', async () => {
  expect(await message()).toMatch('Hello! The current time is');
});
