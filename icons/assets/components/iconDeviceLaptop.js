import { html } from 'lit';

export const iconDeviceLaptop = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m19,17.5H1c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h18c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"/><path d="m15.75,15H4.25c-1.24023,0-2.25-1.00977-2.25-2.25v-7.5c0-1.24023,1.00977-2.25,2.25-2.25h11.5c1.24023,0,2.25,1.00977,2.25,2.25v7.5c0,1.24023-1.00977,2.25-2.25,2.25ZM4.25,4.5c-.41309,0-.75.33691-.75.75v7.5c0,.41309.33691.75.75.75h11.5c.41309,0,.75-.33691.75-.75v-7.5c0-.41309-.33691-.75-.75-.75H4.25Z"/></svg>`;
};
export default iconDeviceLaptop;
