import createHtmlElement from './create';

function loadHeader() {
  const tabContainer = createHtmlElement('div', ['tab-container'], null, null);
  const homeTab = createHtmlElement('div', ['tab', 'selected'], null, 'HOME');
  const menuTab = createHtmlElement('div', ['tab', 'unselected'], null, 'MENU');
  const contactTab = createHtmlElement(
    'div',
    ['tab', 'unselected'],
    null,
    'CONTACT'
  );
  tabContainer.append(homeTab, menuTab, contactTab);
  return tabContainer;
}

export default loadHeader;
