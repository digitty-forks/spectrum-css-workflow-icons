import { html } from 'lit';

export const iconLock = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m15.25,7h-.25v-.5c0-2.75684-2.24316-5-5-5s-5,2.24316-5,5v.5h-.25c-.96484,0-1.75.78516-1.75,1.75v7.5c0,.96484.78516,1.75,1.75,1.75h10.5c.96484,0,1.75-.78516,1.75-1.75v-7.5c0-.96484-.78516-1.75-1.75-1.75Zm-8.75-.5c0-1.92969,1.57031-3.5,3.5-3.5s3.5,1.57031,3.5,3.5v.5h-7v-.5Zm9,9.75c0,.1377-.1123.25-.25.25H4.75c-.1377,0-.25-.1123-.25-.25v-7.5c0-.1377.1123-.25.25-.25h10.5c.1377,0,.25.1123.25.25v7.5Z"/><path d="m11.25,11.5c0-.68945-.56055-1.25-1.25-1.25s-1.25.56055-1.25,1.25c0,.40259.20361.74487.5.97363v.77637c0,.41406.33594.75.75.75s.75-.33594.75-.75v-.77637c.29639-.22876.5-.57104.5-.97363Z"/></svg>`;
};
export default iconLock;
