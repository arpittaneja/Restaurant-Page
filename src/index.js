import './style.css';
import createHtmlElement from './create';
import loadHeader from './header';
import loadHomeContent from './home';
import loadMenuContent from './menu';
import loadContactContent from './contact';
import loadFooterContent from './footer';
import Icon1 from './swiggy.png';
import Icon2 from './zomato.png';

// createInitialPage();

// const tabContent = loadHomeContent();
const orderDiv = createHtmlElement('div', ['order'], null, 'Order Online');

const swiggyIcon = new Image();
swiggyIcon.src = Icon1;
// swiggyIcon.style.height = '100px';

const zomatoIcon = new Image();
zomatoIcon.src = Icon2;
// zomatoIcon.href = 'https://www.google.com';
orderDiv.append(swiggyIcon, zomatoIcon);
swiggyIcon.style.height = '90px';
zomatoIcon.style.height = '90px';
// swiggyIcon.style.width = 'auto';
const footer = loadFooterContent();

const upperContent = createHtmlElement('div', ['upper-content'], null, null);
const lowerContent = createHtmlElement('div', ['lower-content'], null, null);
upperContent.append(loadHeader(), loadHomeContent());
lowerContent.append(orderDiv, footer);
const content = document.querySelector('#content');

content.append(upperContent, lowerContent);
// document.querySelector('body').append(orderDiv, footer);
// tabContent.append(loadHomeContent());
// const body = document.querySelector('body');
const tabs = Array.from(document.querySelectorAll('.tab'));
// console.log(tabs);
tabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    if (Array.from(e.target.classList).includes('unselected')) {
      upperContent.removeChild(upperContent.lastChild);

      if (e.target.textContent === 'HOME') {
        upperContent.append(loadHomeContent());
        lowerContent.insertBefore(orderDiv, footer);
      } else if (e.target.textContent === 'MENU') {
        upperContent.append(loadMenuContent());
        if (lowerContent.children.length === 2) {
          lowerContent.removeChild(lowerContent.firstChild);
        }
      } else {
        upperContent.append(loadContactContent());
        if (lowerContent.children.length === 2) {
          lowerContent.removeChild(lowerContent.firstChild);
        }
        // console.log(lowerContent.children.length);
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
