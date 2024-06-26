import { html } from 'lit';

export const iconDeviceMobile = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><circle cx="5" cy="8.00001" r=".625"/><path d="m8,14.00001h-3.75c-1.24023,0-2.25-1.00977-2.25-2.25v-7.5c0-1.24023,1.00977-2.25,2.25-2.25h11.5c1.24023,0,2.25,1.00977,2.25,2.25,0,.41406-.33594.75-.75.75s-.75-.33594-.75-.75c0-.41309-.33691-.75-.75-.75H4.25c-.41309,0-.75.33691-.75.75v7.5c0,.41309.33691.75.75.75h3.75c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"/><path d="m16.25,18.00001h-4.5c-.96484,0-1.75-.78516-1.75-1.75V7.75001c0-.96484.78516-1.75,1.75-1.75h4.5c.96484,0,1.75.78516,1.75,1.75v8.5c0,.96484-.78516,1.75-1.75,1.75Zm-4.5-10.5c-.1377,0-.25.1123-.25.25v8.5c0,.1377.1123.25.25.25h4.5c.1377,0,.25-.1123.25-.25V7.75001c0-.1377-.1123-.25-.25-.25h-4.5Z"/><circle cx="14" cy="15.00001" r=".625"/></svg>`;
};
export default iconDeviceMobile;
