import createHtmlElement from './create';
import Icon from './github.png';

function loadFooterContent() {
  const footer = createHtmlElement('footer', ['footer'], null, null);

  const githubLogo = new Image();
  githubLogo.src = Icon;
  githubLogo.height = 35;
  githubLogo.width = 35;
  const middleDiv = createHtmlElement('div', null, null, null);
  const lowerDiv = createHtmlElement(
    'div',
    null,
    null,
    'The Wednesday Café © 2022 | All Rights Reserved'
  );
  const span = createHtmlElement('span', ['heart'], null, '♥');
  const a = createHtmlElement(
    'a',
    null,
    { href: 'https://github.com/arpittaneja', target: '_blank' },
    'Arpit Taneja'
  );
  middleDiv.append('Made with ', span, ' by ', a);
  footer.append(githubLogo, middleDiv, lowerDiv);
  return footer;
}

export default loadFooterContent;

// {/* <span>Made with <span class="heart">♥</span> by <a href="https://github.com/arpittaneja" target="_blank">Arpit
//         Taneja</a></span> */}
