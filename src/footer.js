import createHtmlElement from './create';
import githubIcon from './img/github.svg';

function loadFooterContent() {
  const footer = createHtmlElement('footer', null, null, null);

  const githubLogo = new Image();
  githubLogo.src = githubIcon;

  const anchorLogoContainer = createHtmlElement(
    'a',
    ['github-logo-container'],
    {
      href: 'https://github.com/arpittaneja/Restaurant-Page',
      target: '_blank',
    },
    null
  );

  anchorLogoContainer.append(githubLogo);
  const middleDiv = createHtmlElement('div', null, null, null);
  const lowerDiv = createHtmlElement(
    'div',
    null,
    null,
    'The Wednesday Café © 2022 | All Rights Reserved'
  );
  const heartSpan = createHtmlElement('span', ['heart'], null, '♥');
  const nameSpan = createHtmlElement(
    'a',
    null,
    { href: 'https://github.com/arpittaneja', target: '_blank' },
    'Arpit Taneja'
  );
  middleDiv.append('Made with ', heartSpan, ' by ', nameSpan);
  footer.append(anchorLogoContainer, middleDiv, lowerDiv);
  return footer;
}

export default loadFooterContent;
