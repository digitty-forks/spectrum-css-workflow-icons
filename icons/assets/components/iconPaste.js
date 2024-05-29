import { html } from 'lit';

export const iconPaste = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><circle cx="10" cy="4" r="1"/><path d="m15.75,18H4.25c-1.24023,0-2.25-1.00977-2.25-2.25V6.25c0-1.24023,1.00977-2.25,2.25-2.25h2.25195c.02637-.9248.40723-1.7832,1.0791-2.42578.69629-.66602,1.61914-1.0166,2.57617-.96582,1.75293.07617,3.19434,1.57129,3.33203,3.3916h2.26074c1.24023,0,2.25,1.00977,2.25,2.25v9.5c0,1.24023-1.00977,2.25-2.25,2.25ZM4.25,5.5c-.41309,0-.75.33691-.75.75v9.5c0,.41309.33691.75.75.75h11.5c.41309,0,.75-.33691.75-.75V6.25c0-.41309-.33691-.75-.75-.75h-.75v1.25c0,1.24023-1.00977,2.25-2.25,2.25h-5.5c-1.24023,0-2.25-1.00977-2.25-2.25l-.03613-1.25h-.71387Zm2.25,0v1.25c0,.41309.33691.75.75.75h5.5c.41309,0,.75-.33691.75-.75v-1.25h-.75c-.41406,0-.75-.33594-.75-.75v-.46582c0-1.15527-.85645-2.13184-1.9082-2.17773-.55762-.0127-1.07617.1709-1.47363.55176-.39844.38086-.61816.89453-.61816,1.44629v.64551c0,.41406-.33594.75-.75.75h-.75Z"/></svg>`;
};
export default iconPaste;
