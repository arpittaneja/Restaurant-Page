import './style.css';
import createHtmlElement from './create';
import createInitialPage from './initial';
import loadHomeContent from './home';
import loadMenuContent from './menu';
import loadContactContent from './contact';

createInitialPage();

const tabs = Array.from(document.querySelectorAll('.tab'));
const tabContent = createHtmlElement('div', ['tab-content'], null, null);
document.querySelector('#content').append(tabContent);
tabContent.append(loadHomeContent());

tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
        if (Array.from(e.target.classList).includes('unselected')) {
            if (e.target.textContent === "Home") {
                tabContent.textContent = '';
                tabContent.append(loadHomeContent());
            }
            else if (e.target.textContent === "Menu") {
                tabContent.textContent = '';
                tabContent.append(loadMenuContent());
            }
            else {
                tabContent.textContent = '';
                tabContent.append(loadContactContent());
            }
        
            e.target.classList.add('selected');
            tabs.forEach((tb) => {
                if (e.target !== tb) {
                    tb.classList.remove('selected');
                    tb.classList.add('unselected');
                }
            })
        }
    });
});
