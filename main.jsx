import { jsx, jsxs } from './my-react.js';
export function render(el, container) {
  if (typeof el.tag === 'function') {
    return render(el.tag(el.props), container);
  }

  if (typeof el === 'string') {
    container.appendChild(document.createTextNode(el));
    return;
  }

  const domElement = document.createElement(el.tag);

  if (el.props) {
    for (const [key, value] of Object.entries(el.props)) {
      if (key !== 'children') {
        domElement[key] = value;
      }
    }
  }

  const children = Array.isArray(el.children) ? el.children : [el.children];
  children.forEach((child) => render(child, domElement));

  container.appendChild(domElement);
}

const App = () => {
  return (
    <div draggable>
      <h3>Build your own React</h3>
      <input type="text" />
      <button>{`Click :)`}</button>
      <h5>H5 element</h5>
    </div>
  );
};

render(<App />, document.getElementById('myroot'));
