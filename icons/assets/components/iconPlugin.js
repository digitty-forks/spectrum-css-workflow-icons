import { html } from 'lit';

export const iconPlugin = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m16.75,4h-.75v-.75098c0-.96484-.78516-1.75-1.75-1.75h-1.5c-.96484,0-1.75.78516-1.75,1.75v.75098h-2v-.75098c0-.96484-.78516-1.75-1.75-1.75h-1.5c-.96484,0-1.75.78516-1.75,1.75v.75098h-.75c-1.24072,0-2.25,1.00977-2.25,2.25v8.5c0,1.24023,1.00928,2.25,2.25,2.25h13.5c1.24072,0,2.25-1.00977,2.25-2.25V6.25c0-1.24023-1.00928-2.25-2.25-2.25Zm-4.25-.75098c0-.1377.1123-.25.25-.25h1.5c.1377,0,.25.1123.25.25v.75098h-2v-.75098Zm-7,0c0-.1377.1123-.25.25-.25h1.5c.1377,0,.25.1123.25.25v.75098h-2v-.75098Zm12,11.50098c0,.41309-.33643.75-.75.75H3.25c-.41357,0-.75-.33691-.75-.75V6.25c0-.41309.33643-.75.75-.75h13.5c.41357,0,.75.33691.75.75v8.5Z"/></svg>`;
};
export default iconPlugin;
