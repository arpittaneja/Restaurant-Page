import createHtmlElement from './create';

function createInitialPage() {
  // const h1 = createHtmlElement('h1', null, null, 'Tannin and Table');

  const div = createHtmlElement('div', ['tab-container'], null, null);
  const tab1 = createHtmlElement('div', ['tab', 'selected'], null, 'Home');
  const tab2 = createHtmlElement('div', ['tab', 'unselected'], null, 'Menu');
  const tab3 = createHtmlElement(
    'div',
    ['tab', 'unselected'],
    null,
    'Contact Us'
  );
  div.append(tab1, tab2, tab3);
  document.querySelector('#content').append(div);
}

export default createInitialPage;
