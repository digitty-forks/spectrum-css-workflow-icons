import { html } from 'lit';

export const iconCornerRadius = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m3.74994,18c-.41406,0-.75-.33594-.75-.75v-5.5C2.99994,6.92529,6.92523,3,11.74994,3h5.5c.41406,0,.75.33594.75.75s-.33594.75-.75.75h-5.5c-3.99756,0-7.25,3.25244-7.25,7.25v5.5c0,.41406-.33594.75-.75.75Z"/></svg>`;
};
export default iconCornerRadius;
