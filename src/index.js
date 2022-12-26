import './style.css';
import createHtmlElement from './create';
import createInitialPage from './initial';
import loadHomeContent from './home';
import loadMenuContent from './menu';
import loadContactContent from './contact';
import loadFooterContent from './footer';
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
const footer = loadFooterContent();
const content = document.querySelector('#content');
content.append(loadHomeContent());
document.querySelector('body').append(orderDiv, footer);
// tabContent.append(loadHomeContent());
const body = document.querySelector('body');
tabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    if (Array.from(e.target.classList).includes('unselected')) {
      console.log(body.lastChild);
      content.removeChild(content.lastChild);

      if (e.target.textContent === 'Home') {
        // body.removeChild(footer);
        // body.insertBefore(orderDiv, footer);
        const tabContent = loadHomeContent();
        // console.log(tabContent);
        content.append(tabContent);
      } else if (e.target.textContent === 'Menu') {
        // body.removeChild(orderDiv);
        const tabContent = loadMenuContent();
        content.append(tabContent);
      } else {
        // body.removeChild(orderDiv);
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
