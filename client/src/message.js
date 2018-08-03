export default async function message() {
  const response = await fetch('api/time');
  const { time } = await response.json();
  return `Hello! The current time is ${time}`;
}
