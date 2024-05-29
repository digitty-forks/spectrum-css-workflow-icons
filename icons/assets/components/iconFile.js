import { html } from 'lit';

export const iconFile = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m16.34131,5.28027l-3.62207-3.62109c-.4248-.4248-.98975-.65918-1.59033-.65918h-5.87891c-1.24072,0-2.25,1.00977-2.25,2.25v12.5c0,1.24023,1.00928,2.25,2.25,2.25h9.5c1.24072,0,2.25-1.00977,2.25-2.25V6.87109c0-.5918-.23975-1.17188-.65869-1.59082Zm-1.06104,1.06055c.04565.04565.07385.10376.10602.15918h-3.13629c-.41357,0-.75-.33691-.75-.75v-3.13599c.05518.03223.11316.06018.15869.10571l3.62158,3.62109Zm-.53027,10.15918H5.25c-.41357,0-.75-.33691-.75-.75V3.25c0-.41309.33643-.75.75-.75h4.75v3.25c0,1.24023,1.00928,2.25,2.25,2.25h3.25v7.75c0,.41309-.33643.75-.75.75Z"/></svg>`;
};
export default iconFile;
