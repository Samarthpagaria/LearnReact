function customRender(reactElement, container) {
  // const domElement = document.createElement(reactElement.type);
  // domElement.textContent = reactElement.children;
  // if (reactElement.props.href) {
  //   domElement.setAttribute("href", reactElement.props.href);
  // }
  // if (reactElement.props.target) {
  //   domElement.setAttribute("target", reactElement.props.target);
  // }
  // container.appendChild(domElement);
  const DomElement = document.createElement(reactElement.type);
  DomElement.innerHTML = reactElement.children;
  for (const props in reactElement.props) {
    DomElement.setAttribute(prop, reactElement.props, [prop]);
  }
  container.appendChild(DomElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.getElementById("root");
customRender(reactElement, mainContainer);
