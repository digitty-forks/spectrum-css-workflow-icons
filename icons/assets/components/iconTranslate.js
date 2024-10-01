import { html } from 'lit';

export const iconTranslate = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="M12.25,2.5h-4.41602v-.75c0-.41406-.33594-.75-.75-.75s-.75.33594-.75.75v.75H1.75c-.41406,0-.75.33594-.75.75s.33594.75.75.75h7.87756c-.45685,2.271-1.83588,3.87573-3.3559,4.93359-.47833-.86816-.84314-1.75977-1.06757-2.64453-.10156-.40137-.51025-.64844-.91162-.54199-.40137.10156-.64404.50977-.54248.91113.25867,1.01953.67657,2.04468,1.22845,3.03857-.79346.39551-1.56305.6604-2.19574.80225-.4043.08984-.65869.49121-.56836.89551.07812.34863.3877.58594.73145.58594.0542,0,.10938-.00586.16406-.01855.76636-.17139,1.70502-.49878,2.66888-.99585.82391,1.19067,1.83002,2.31128,2.98834,3.28394.14062.11816.31201.17578.48193.17578.21387,0,.42627-.09082.57471-.26758.2666-.31738.2251-.79004-.0918-1.05664-1.03131-.86621-1.927-1.85742-2.664-2.90601,1.87836-1.28979,3.60254-3.29297,4.08789-6.19556h1.09418c.41406,0,.75-.33594.75-.75s-.33594-.75-.75-.75Z" stroke-width="0"/><path d="M18.94092,17.95801l-4.01904-9.5c-.11768-.27734-.38965-.45801-.69092-.45801s-.57324.18066-.69092.45801l-4.01953,9.5c-.16113.38086.01709.82129.39844.98242.38428.16504.82227-.0166.9834-.39844l1.28052-3.02637h4.09589l1.28033,3.02637c.12109.28613.39893.45801.69141.45801.09717,0,.19629-.01855.2915-.05957.38184-.16113.56006-.60156.39893-.98242ZM12.8175,14.01562l1.41345-3.34082,1.41327,3.34082h-2.82672Z" stroke-width="0"/></svg>`;
};
export default iconTranslate;