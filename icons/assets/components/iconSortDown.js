import { html } from 'lit';

export const iconSortDown = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m18.28027,13.21973c-.29297-.29297-.76758-.29297-1.06055,0l-1.21973,1.21973V3.75c0-.41406-.33594-.75-.75-.75s-.75.33594-.75.75v10.68945l-1.21973-1.21973c-.29297-.29297-.76758-.29297-1.06055,0s-.29297.76758,0,1.06055l2.5,2.5c.06909.06909.15186.12354.24341.16162s.18896.05811.28687.05811.19531-.02002.28687-.05811.17432-.09253.24341-.16162l2.5-2.5c.29297-.29297.29297-.76758,0-1.06055Z"/><path d="m7.25,14.5H2.75c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h4.5c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"/><path d="m9.25,10.5H2.75c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h6.5c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"/><path d="m11.25,6.5H2.75c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h8.5c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"/></svg>`;
};
export default iconSortDown;
