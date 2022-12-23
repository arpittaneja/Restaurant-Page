function createHtmlElement(name, classList, attributes, string) {
  const element = document.createElement(name);
  if (classList) {
    classList.forEach((cls) => {
      element.classList.add(cls);
    });
  }
  if (attributes) {
    Object.keys(attributes).forEach((key) => {
      element.setAttribute(key, attributes[key]);
    });
  }
  element.textContent = string;
  return element;
}
export default createHtmlElement;
