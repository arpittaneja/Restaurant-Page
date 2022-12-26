import createHtmlElement from './create';
// import Icon1 from './swiggy.png';

function loadContactContent() {
  // const swiggyIcon = new Image();
  // swiggyIcon.src = Icon1;
  // swiggyIcon.style.height = '200px';
  // swiggyIcon.style.width = 'inherit';

  const contactHead = createHtmlElement(
    'div',
    ['contact-head'],
    null,
    'Contact Us'
  );

  const mapImg = createHtmlElement('div', ['map'], null, null);
  // mapImg.append(swiggyIcon);
  // console.log(mapImg.children);
  // mapImg.style.height = '100px';

  const addressDiv = createHtmlElement('div', ['address'], null, 'address');
  mapImg.style.width = 'inherit';
  mapImg.style.height = '400px';
  const div = createHtmlElement('div', ['contact-content'], null, null);
  div.append(contactHead, mapImg, addressDiv);
  return div;
}

export default loadContactContent;
