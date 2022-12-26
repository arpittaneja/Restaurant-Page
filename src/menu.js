import createHtmlElement from './create';

function loadMenuContent() {
  const div = createHtmlElement('div', ['menu-content'], null, 'menu');
  return div;
}

export default loadMenuContent;
