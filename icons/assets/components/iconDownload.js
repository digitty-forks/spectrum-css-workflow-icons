import { html } from 'lit';

export const iconDownload = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m13.53027,9.42676c-.29199-.29199-.7666-.29395-1.06055,0l-1.7168,1.71411V2.75c0-.41406-.33594-.75-.75-.75s-.75.33594-.75.75v8.39941l-1.72266-1.72266c-.29297-.29297-.76758-.29297-1.06055,0s-.29297.76758,0,1.06055l2.99805,2.99805c.14648.14648.33789.21973.53027.21973.19141,0,.38379-.07324.53027-.21973l3.00195-2.99805c.29297-.29199.29297-.76758,0-1.06055Z"/><path d="m15.75,18H4.25c-1.24023,0-2.25-1.00977-2.25-2.25v-2.02148c0-.41406.33594-.75.75-.75s.75.33594.75.75v2.02148c0,.41309.33691.75.75.75h11.5c.41309,0,.75-.33691.75-.75v-2.02148c0-.41406.33594-.75.75-.75s.75.33594.75.75v2.02148c0,1.24023-1.00977,2.25-2.25,2.25Z"/></svg>`;
};
export default iconDownload;
