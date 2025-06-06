import { html } from 'lit';

export const iconTextIncrease = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="M12.58984,1.99805H3.41016c-1.24023,0-2.25,1.00977-2.25,2.25v1.11035c0,.41406.33594.75.75.75s.75-.33594.75-.75v-1.11035c0-.41309.33691-.75.75-.75h3.83984v13h-1.5c-.41406,0-.75.33594-.75.75s.33594.75.75.75h4.25c.41406,0,.75-.33594.75-.75s-.33594-.75-.75-.75h-1.25V3.49805h3.83984c.41309,0,.75.33691.75.75v1.11035c0,.41406.33594.75.75.75s.75-.33594.75-.75v-1.11035c0-1.24023-1.00977-2.25-2.25-2.25Z" stroke-width="0"/><path d="M18.75,18.5c-.19238,0-.38379-.07324-.53027-.21973l-2.46973-2.46973-2.46973,2.46973c-.29297.29297-.76758.29297-1.06055,0s-.29297-.76758,0-1.06055l3-3c.29297-.29297.76758-.29297,1.06055,0l3,3c.29297.29297.29297.76758,0,1.06055-.14648.14648-.33789.21973-.53027.21973Z" stroke-width="0"/></svg>`;
};
export default iconTextIncrease;
