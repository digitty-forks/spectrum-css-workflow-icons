import { html } from 'lit';

export const iconRedo = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m7.74268,5h8.44922s-1.71973-1.71973-1.71973-1.71973c-.29297-.29297-.29297-.76758,0-1.06055s.76758-.29297,1.06055,0l2.99756,2.99756c.29297.29248.29297.76709.00049,1.06006l-2.99756,3.00244c-.14648.14697-.33838.22021-.53076.22021-.19189,0-.3833-.07324-.52979-.21924-.29346-.29248-.29346-.76758-.00098-1.06055l1.71747-1.72021H7.74268c-2.48145,0-4.50049,2.01855-4.50049,4.5s2.01904,4.5,4.50049,4.5h3.73779c.41406,0,.75.33594.75.75,0,.41406-.33594.75-.75.75h-3.73779c-3.30859,0-6.00049-2.69141-6.00049-6s2.69189-6,6.00049-6Z"/></svg>`;
};
export default iconRedo;
