import createHtmlElement from './create';

function loadHomeContent() {
  const homeHead = createHtmlElement(
    'div',
    ['home-head'],
    null,
    'Tannin and Table'
  );

  const homeMain = createHtmlElement(
    'div',
    ['home-main'],
    null,
    'Enjoy our finest cousines!'
  );
  const div = createHtmlElement('div', ['home-content'], null, null);
  div.append(homeHead, homeMain);
  return div;
}

export default loadHomeContent;
