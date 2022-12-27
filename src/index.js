import './style/style.css';
import createHtmlElement from './create';
import loadHeader from './header';
import loadHomeContent from './home';
import loadMenuContent from './menu';
import loadContactContent from './contact';
import loadFooterContent from './footer';
import loadOrderContent from './order';

const orderDiv = loadOrderContent();
const footer = loadFooterContent();
const upperContent = createHtmlElement('div', ['upper-content'], null, null);
const lowerContent = createHtmlElement('div', ['lower-content'], null, null);
const content = document.querySelector('#content');

upperContent.append(loadHeader(), loadHomeContent());
lowerContent.append(orderDiv, footer);
content.append(upperContent, lowerContent);

const tabs = Array.from(document.querySelectorAll('.tab'));
tabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    if (Array.from(e.target.classList).includes('unselected')) {
      // remove the main content of existing tab
      upperContent.removeChild(upperContent.lastChild);

      if (e.target.textContent === 'HOME') {
        // append new content of new selected tab
        upperContent.append(loadHomeContent());
        lowerContent.insertBefore(orderDiv, footer);
      } else if (e.target.textContent === 'MENU') {
        // append new content of new selected tab
        upperContent.append(loadMenuContent());
        // if existing tab is HOME, remove orderDiv
        if (lowerContent.children.length === 2) {
          lowerContent.removeChild(lowerContent.firstChild);
        }
      } else {
        // append new content of new selected tab
        upperContent.append(loadContactContent());
        // if existing tab is HOME, remove orderDiv
        if (lowerContent.children.length === 2) {
          lowerContent.removeChild(lowerContent.firstChild);
        }
      }
      e.target.classList.add('selected');
      e.target.classList.remove('unselected');
      // add unselected class to and remove selected class from non-clicked tabs
      tabs.forEach((tb) => {
        if (e.target !== tb) {
          tb.classList.remove('selected');
          tb.classList.add('unselected');
        }
      });
    }
  });
});
