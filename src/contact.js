import createHtmlElement from './create';
import mapImg from './map.png';

function loadContactContent() {
  const map = new Image();
  map.src = mapImg;
  // map.style.height = 'auto';
  // map.style.width = '80%';
  // swiggyIcon.style.width = 'inherit';
  const contactDiv = createHtmlElement(
    'div',
    ['contact-div'],
    null,
    'Contact Us'
  );
  const contactBody = createHtmlElement('div', ['contact-body'], null, null);
  const emailSpan = createHtmlElement(
    'span',
    null,
    null,
    'thewednesdaycafe@gmail.com'
  );
  const numberSpan = createHtmlElement('span', null, null, '+91 9876543210');

  contactBody.append(emailSpan, numberSpan);
  contactDiv.append(contactBody);
  const addressDiv = createHtmlElement('div', ['address'], null, 'Address');
  const addressBody = createHtmlElement(
    'div',
    ['address-body'],
    null,
    '6th Avenue, Calgary, AB, Canada'
  );
  addressDiv.append(addressBody);
  // mapImg.style.width = 'inherit';
  // mapImg.style.height = '400px';
  const div = createHtmlElement('div', ['contact-content'], null, null);
  div.append(addressDiv, map, contactDiv);
  return div;
}

export default loadContactContent;
