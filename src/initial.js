import createHtmlElement from './create';

function createInitialPage() {
  const h1 = createHtmlElement('h1', null, null, 'Restaurant');

  const div = createHtmlElement('div', ['tab-container'], null, null);

  const tab1 = createHtmlElement('div', null, null, 'Home');
  const tab2 = createHtmlElement('div', null, null, 'Menu');
  const tab3 = createHtmlElement('div', null, null, 'Contact Us');
  div.append(tab1, tab2, tab3);
  document.querySelector('#content').append(h1, div);
}

export default createInitialPage;
