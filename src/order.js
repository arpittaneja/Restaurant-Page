import createHtmlElement from './create';
import swiggyImg from './img/swiggy.png';
import zomatoImg from './img/zomato.png';

function loadOrderContent() {
  const orderDiv = createHtmlElement('div', ['order'], null, 'Order Online');
  const swiggyIcon = new Image();
  swiggyIcon.src = swiggyImg;

  const zomatoIcon = new Image();
  zomatoIcon.src = zomatoImg;
  orderDiv.append(swiggyIcon, zomatoIcon);
  swiggyIcon.style.height = '90px';
  zomatoIcon.style.height = '90px';
  return orderDiv;
}

export default loadOrderContent;
