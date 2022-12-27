import createHtmlElement from './create';

function loadHomeContent() {
  const homeHead = createHtmlElement(
    'div',
    ['home-head'],
    null,
    'The Wednesday Café'
  );
  const homeSubHead = createHtmlElement(
    'div',
    ['home-sub-head'],
    null,
    'Where The Darkness Brews'
  );
  const div = createHtmlElement('div', ['home-content'], null, null);
  div.append(homeHead, homeSubHead);
  return div;
}

export default loadHomeContent;
