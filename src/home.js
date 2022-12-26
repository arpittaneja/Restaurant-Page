import createHtmlElement from './create';

function loadHomeContent() {
  const homeHead = createHtmlElement(
    'div',
    ['home-head'],
    null,
    'Welcome to Tannin and Table'
  );

  const homeMain = createHtmlElement(
    'div',
    ['home-main'],
    null,
    'Enjoy the finest cousines!'
  );
  const div = createHtmlElement('div', ['tab-content'], null, null);
  div.append(homeHead, homeMain);
  return div;
}

export default loadHomeContent;
