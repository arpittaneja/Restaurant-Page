import createHtmlElement from './create';

function loadHeader() {
  // const h1 = createHtmlElement('h1', null, null, 'Tannin and Table');
  const tabContainer = createHtmlElement('div', ['tab-container'], null, null);
  const tab1 = createHtmlElement('div', ['tab', 'selected'], null, 'HOME');
  const tab2 = createHtmlElement('div', ['tab', 'unselected'], null, 'MENU');
  const tab3 = createHtmlElement('div', ['tab', 'unselected'], null, 'CONTACT');
  tabContainer.append(tab1, tab2, tab3);
  return tabContainer;
}

export default loadHeader;
