import createHtmlElement from './create';

function createInitialPage() {
  const h1 = createHtmlElement('h1', null, null, 'Restaurant');
  document.querySelector('#content').appendChild(h1);
}

export default createInitialPage;
