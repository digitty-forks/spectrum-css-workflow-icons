import { html } from 'lit';

export const iconTextStrikeThrough = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m14.5,2H5.5c-1.24023,0-2.25,1.00977-2.25,2.25v1.11035c0,.41406.33594.75.75.75s.75-.33594.75-.75v-1.11035c0-.41309.33691-.75.75-.75h3.75v3.75c0,.41406.33594.75.75.75s.75-.33594.75-.75v-3.75h3.75c.41309,0,.75.33691.75.75v1.11035c0,.41406.33594.75.75.75s.75-.33594.75-.75v-1.11035c0-1.24023-1.00977-2.25-2.25-2.25Z"/><path d="m16.25,9.25H3.75c-.41406,0-.75.33594-.75.75s.33594.75.75.75h5.5v5.75h-1.5498c-.41406,0-.75.33594-.75.75s.33594.75.75.75h4.63965c.41406,0,.75-.33594.75-.75s-.33594-.75-.75-.75h-1.58984v-5.75h5.5c.41406,0,.75-.33594.75-.75s-.33594-.75-.75-.75Z"/></svg>`;
};
export default iconTextStrikeThrough;
