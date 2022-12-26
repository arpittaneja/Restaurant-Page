import './style.css';
import createHtmlElement from './create';
import createInitialPage from './initial';
import loadHomeContent from './home';
import loadMenuContent from './menu';
import loadContactContent from './contact';

createInitialPage();

const tabs = Array.from(document.querySelectorAll('.tab'));
// const tabContent = loadHomeContent();
const footer = createHtmlElement('footer', null, null, 'footer');
const content = document.querySelector('#content');
content.append(loadHomeContent());
document.querySelector('body').append(footer);
// tabContent.append(loadHomeContent());

tabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    if (Array.from(e.target.classList).includes('unselected')) {
      content.removeChild(content.lastChild);

      if (e.target.textContent === 'Home') {
        const tabContent = loadHomeContent();
        console.log(tabContent);
        content.append(tabContent);
      } else if (e.target.textContent === 'Menu') {
        const tabContent = loadMenuContent();
        content.append(tabContent);
      } else {
        const tabContent = loadContactContent();
        content.append(tabContent);
      }
      e.target.classList.add('selected');
      e.target.classList.remove('unselected');
      tabs.forEach((tb) => {
        if (e.target !== tb) {
          tb.classList.remove('selected');
          tb.classList.add('unselected');
        }
      });
    }
  });
});
