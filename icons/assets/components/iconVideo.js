import { html } from 'lit';

export const iconVideo = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m15.75,18H4.25c-1.24023,0-2.25-1.00977-2.25-2.25V4.25c0-1.24023,1.00977-2.25,2.25-2.25h11.5c1.24023,0,2.25,1.00977,2.25,2.25v11.5c0,1.24023-1.00977,2.25-2.25,2.25ZM4.25,3.5c-.41309,0-.75.33691-.75.75v11.5c0,.41309.33691.75.75.75h11.5c.41309,0,.75-.33691.75-.75V4.25c0-.41309-.33691-.75-.75-.75H4.25Z"/><path d="m13.07307,9.11916l-4.59971-2.47212c-.66621-.35806-1.47342.12451-1.47342.88085v4.94424c0,.75633.80721,1.2389,1.47342.88085l4.59972-2.47213c.70212-.37736.70212-1.38433,0-1.76169Z"/></svg>`;
};
export default iconVideo;
