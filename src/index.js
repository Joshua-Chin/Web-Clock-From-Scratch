const component = () => {
  const element = document.createElement('div');
  element.innerHTML = ['Hello', 'Webpack'].join(' ');
  return element;
}

document.body.appendChild(component());
