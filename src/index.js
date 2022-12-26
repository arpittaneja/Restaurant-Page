import './style.css';
import createHtmlElement from './create';
import createInitialPage from './initial';
import loadHomeContent from './home';
import loadMenuContent from './menu';
import loadContactContent from './contact';
import Icon1 from './swiggy.png';
import Icon2 from './zomato.png';

createInitialPage();

const tabs = Array.from(document.querySelectorAll('.tab'));
// const tabContent = loadHomeContent();
const orderDiv = createHtmlElement('div', ['order'], null, 'Order Online');

const swiggyIcon = new Image();
swiggyIcon.src = Icon1;
swiggyIcon.style.height = '100px';

const zomatoIcon = new Image();
zomatoIcon.src = Icon2;
// zomatoIcon.href = 'https://www.google.com';
orderDiv.append(swiggyIcon, zomatoIcon);
swiggyIcon.style.height = '90px';
zomatoIcon.style.height = '90px';
// swiggyIcon.style.width = 'auto';

const footer = createHtmlElement('div', ['footer'], null, 'footer');
const content = document.querySelector('#content');
content.append(loadHomeContent());
document.querySelector('body').append(orderDiv, footer);
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
