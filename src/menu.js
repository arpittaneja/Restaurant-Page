import createHtmlElement from './create';
import shotImg from './shot.jpeg';
import potatoImg from './monstermash.jpg';
import cookieImg from './eyeballcookies.jpg';
import shakeImg from './deathshake.jpg';

function loadMenuContent() {
  const shot = new Image();
  const potato = new Image();
  const cookie = new Image();
  const shake = new Image();
  shot.src = shotImg;
  const menu = createHtmlElement('div', ['menu-content'], null, null);
  const menuItem1 = createHtmlElement(
    'div',
    ['menu-item-1'],
    null,
    'Zombie Brain Jello Shots'
  );
  menuItem1.append(shot);
  const menuItem2 = createHtmlElement(
    'div',
    ['menu-item-2'],
    null,
    'Monster Mashed Potatoes'
  );
  potato.src = potatoImg;
  menuItem2.append(potato);
  const menuItem3 = createHtmlElement(
    'div',
    ['menu-item-3'],
    null,
    'Eyeball Cookies'
  );
  cookie.src = cookieImg;
  menuItem3.append(cookie);
  const menuItem4 = createHtmlElement(
    'div',
    ['menu-item-4'],
    null,
    'Death Shake'
  );
  shake.src = shakeImg;
  menuItem4.append(shake);
  menu.append(menuItem1, menuItem2, menuItem3, menuItem4);
  return menu;
}

export default loadMenuContent;
