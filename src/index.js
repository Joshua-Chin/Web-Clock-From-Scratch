import './index.css';

const component = () => {
  const element = document.createElement('p');
  element.innerHTML = message();
  return element;
};

export const message = () => ['Hello', 'Project', new Date()].join(' ');

document.body.appendChild(component());
