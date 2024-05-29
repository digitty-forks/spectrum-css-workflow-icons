import { html } from 'lit';

export const iconDeviceDesktop = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m14,18.5H6c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h8c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"/><path d="m16.75,16H3.25c-1.24023,0-2.25-1.00977-2.25-2.25V5.25c0-1.24023,1.00977-2.25,2.25-2.25h13.5c1.24023,0,2.25,1.00977,2.25,2.25v8.5c0,1.24023-1.00977,2.25-2.25,2.25ZM3.25,4.5c-.41309,0-.75.33691-.75.75v8.5c0,.41309.33691.75.75.75h13.5c.41309,0,.75-.33691.75-.75V5.25c0-.41309-.33691-.75-.75-.75H3.25Z"/></svg>`;
};
export default iconDeviceDesktop;
