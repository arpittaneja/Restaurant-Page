import createHtmlElement from './create';

function loadMenuContent() {
  const div = createHtmlElement('div', ['tab-content'], null, 'menu');
  return div;
}

export default loadMenuContent;
