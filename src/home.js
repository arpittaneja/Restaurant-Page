import createHtmlElement from './create';

function loadHomeContent() {
  const homeHead = createHtmlElement(
    'div',
    ['home-head'],
    null,
    'The Wednesday Cafe'
  );
  const homeMain = createHtmlElement(
    'div',
    ['home-main'],
    null,
    'Where The Darkness Brews'
  );
  const div = createHtmlElement('div', ['home-content'], null, null);
  div.append(homeHead, homeMain);
  return div;
}

export default loadHomeContent;
