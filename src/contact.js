import createHtmlElement from './create';

function loadContactContent() {
  const div = createHtmlElement('div', ['tab-content'], null, 'contact');
  return div;
}
export default loadContactContent;
