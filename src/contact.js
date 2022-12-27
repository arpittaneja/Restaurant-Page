import createHtmlElement from './create';
import mapIcon from './img/map.png';

function loadContactContent() {
  const map = new Image();
  map.src = mapIcon;
  const contactDiv = createHtmlElement(
    'div',
    ['contact-container'],
    null,
    'CONTACT US'
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
  const addressDiv = createHtmlElement('div', ['address'], null, 'ADDRESS');
  const addressBody = createHtmlElement(
    'div',
    ['address-body'],
    null,
    '6th Avenue, Calgary, AB, Canada'
  );
  addressDiv.append(addressBody);
  const contactContent = createHtmlElement(
    'div',
    ['contact-content'],
    null,
    null
  );
  contactContent.append(addressDiv, map, contactDiv);
  return contactContent;
}

export default loadContactContent;
