import './index.css';

const component = () => {
  const element = document.createElement('p');
  element.innerHTML = ['Hello', 'Webpack'].join(' ');
  return element;
};

document.body.appendChild(component());
