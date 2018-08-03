const message = () => [
  'Hello!',
  'The', 'current', 'time', 'is',
  new Date().toTimeString(),
].join(' ');
export default message;
