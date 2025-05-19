export function jsx(tag, props, ...children) {
  return {
    tag,
    props: props || {},
    children: children.flat(),
  };
}

export const jsxs = jsx;
