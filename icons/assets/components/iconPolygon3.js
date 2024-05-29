import { html } from 'lit';

export const iconPolygon3 = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m16.94873,18H3.05127c-.81348,0-1.54199-.4209-1.94873-1.125-.40674-.70508-.40625-1.5459.00049-2.25L8.05176,2.58984c.40674-.7041,1.13477-1.125,1.94824-1.125s1.54199.4209,1.94824,1.125l6.94873,12.03516c.40674.7041.40723,1.54492.00049,2.25-.40674.7041-1.13525,1.125-1.94873,1.125ZM10,2.96484c-.13037,0-.4541.03613-.64941.375L2.40186,15.375c-.19531.33887-.06543.6377,0,.75.06494.1123.2583.375.64941.375h13.89746c.39111,0,.58447-.2627.64941-.375.06543-.1123.19531-.41113,0-.75L10.64941,3.33984c-.19531-.33887-.51904-.375-.64941-.375Z"/></svg>`;
};
export default iconPolygon3;
