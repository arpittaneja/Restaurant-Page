import './style.css';
import createInitialPage from './initial';

createInitialPage();

const tabs = Array.from(document.querySelectorAll('.tab'));

tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
        e.target.classList.add('selected');
        tabs.forEach((tb) => {
            if (e.target !== tb) {
                tb.classList.remove('selected');
            }
        })
    });
});
