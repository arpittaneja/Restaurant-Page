import createHtmlElement from './create';
import shotIcon from './img/shot.jpeg';
import potatoIcon from './img/monstermash.jpg';
import cookieIcon from './img/eyeballcookies.jpg';
import shakeIcon from './img/deathshake.jpg';

function loadMenuContent() {
  const shot = new Image();
  const potato = new Image();
  const cookie = new Image();
  const shake = new Image();
  const menu = createHtmlElement('div', ['menu-content'], null, null);
  const menuItem1 = createHtmlElement(
    'div',
    ['menu-item-1'],
    null,
    'Zombie Brain Jello Shots'
  );
  shot.src = shotIcon;
  menuItem1.append(shot);
  const menuItem2 = createHtmlElement(
    'div',
    ['menu-item-2'],
    null,
    'Monster Mashed Potatoes'
  );
  potato.src = potatoIcon;
  menuItem2.append(potato);
  const menuItem3 = createHtmlElement(
    'div',
    ['menu-item-3'],
    null,
    'Eyeball Cookies'
  );
  cookie.src = cookieIcon;
  menuItem3.append(cookie);
  const menuItem4 = createHtmlElement(
    'div',
    ['menu-item-4'],
    null,
    'Death Shake'
  );
  shake.src = shakeIcon;
  menuItem4.append(shake);

  menu.append(menuItem1, menuItem2, menuItem3, menuItem4);
  return menu;
}

export default loadMenuContent;
