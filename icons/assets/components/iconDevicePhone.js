import { html } from 'lit';

export const iconDevicePhone = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><circle cx="10" cy="15" r="1"/><path d="m13.75,19h-7.5c-1.24023,0-2.25-1.00977-2.25-2.25V3.25c0-1.24023,1.00977-2.25,2.25-2.25h7.5c1.24023,0,2.25,1.00977,2.25,2.25v13.5c0,1.24023-1.00977,2.25-2.25,2.25ZM6.25,2.5c-.41309,0-.75.33691-.75.75v13.5c0,.41309.33691.75.75.75h7.5c.41309,0,.75-.33691.75-.75V3.25c0-.41309-.33691-.75-.75-.75h-7.5Z"/></svg>`;
};
export default iconDevicePhone;
