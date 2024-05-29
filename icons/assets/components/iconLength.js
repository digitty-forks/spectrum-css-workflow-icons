import { html } from 'lit';

export const iconLength = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m17.28027,9.71973l-2.25-2.25c-.29297-.29297-.76758-.29297-1.06055,0s-.29297.76758,0,1.06055l.96973.96973H5.06055l.96973-.96973c.29297-.29297.29297-.76758,0-1.06055s-.76758-.29297-1.06055,0l-2.25,2.25c-.29297.29297-.29297.76758,0,1.06055l2.25,2.25c.14648.14648.33838.21973.53027.21973s.38379-.07324.53027-.21973c.29297-.29297.29297-.76758,0-1.06055l-.96973-.96973h9.87891l-.96973.96973c-.29297.29297-.29297.76758,0,1.06055.14648.14648.33838.21973.53027.21973s.38379-.07324.53027-.21973l2.25-2.25c.29297-.29297.29297-.76758,0-1.06055Z"/><path d="m18.25,16.75c-.41406,0-.75-.33594-.75-.75V4c0-.41406.33594-.75.75-.75s.75.33594.75.75v12c0,.41406-.33594.75-.75.75Z"/><path d="m2.5,16V4c0-.41406-.33594-.75-.75-.75s-.75.33594-.75.75v12c0,.41406.33594.75.75.75s.75-.33594.75-.75Z"/></svg>`;
};
export default iconLength;
