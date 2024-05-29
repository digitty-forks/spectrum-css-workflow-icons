import { html } from 'lit';

export const iconTemperature = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m13.5,9.26099v-5.0647c0-2.03809-1.57031-3.69629-3.5-3.69629s-3.5,1.6582-3.5,3.69629v5.0647c-1.2207,1.00977-2,2.53516-2,4.23901,0,3.03223,2.46777,5.5,5.5,5.5s5.5-2.46777,5.5-5.5c0-1.70386-.7793-3.22925-2-4.23901Zm-3.5,8.23901c-2.20605,0-4-1.79395-4-4,0-1.03113.40259-1.96289,1.04541-2.67285.27612-.30505.59692-.5625.95459-.771v-5.85986c0-1.21094.89746-2.19629,2-2.19629s2,.98535,2,2.19629v5.85986c.35767.2085.67847.46594.95459.771.64282.70996,1.04541,1.64172,1.04541,2.67285,0,2.20605-1.79395,4-4,4Z"/><path d="m10.75,11.3877v-4.6377c0-.41406-.33594-.75-.75-.75s-.75.33594-.75.75v4.6377c-.87207.31006-1.5,1.13403-1.5,2.1123,0,1.24268,1.00732,2.25,2.25,2.25s2.25-1.00732,2.25-2.25c0-.97827-.62793-1.80225-1.5-2.1123Z"/></svg>`;
};
export default iconTemperature;
