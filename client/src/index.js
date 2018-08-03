import './index.css';
import message from './message';

async function component() {
  const element = document.createElement('p');
  element.innerHTML = await message();
  return element;
}

async function main() {
  document.body.appendChild(await component());
}

main();
