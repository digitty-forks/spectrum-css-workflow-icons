import { html } from 'lit';

export const iconTable = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="M15.75,2H4.25c-1.24072,0-2.25,1.00977-2.25,2.25v11.5c0,1.24023,1.00928,2.25,2.25,2.25h11.5c1.24072,0,2.25-1.00977,2.25-2.25V4.25c0-1.24023-1.00928-2.25-2.25-2.25ZM3.5,9h3v3h-3v-3ZM8,9h8.5v3h-8.5v-3ZM3.5,4.25c0-.41309.33643-.75.75-.75h11.5c.41357,0,.75.33691.75.75v3.25H3.5v-3.25ZM3.5,15.75v-2.25h3v3h-2.25c-.41357,0-.75-.33691-.75-.75ZM16.5,15.75c0,.41309-.33643.75-.75.75h-7.75v-3h8.5v2.25Z" stroke-width="0"/></svg>`;
};
export default iconTable;