import './index.css';
import message from './message';

const component = () => {
  const element = document.createElement('p');
  element.innerHTML = message();
  return element;
};

document.body.appendChild(component());
