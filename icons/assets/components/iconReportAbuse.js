import { html } from 'lit';

export const iconReportAbuse = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m9.99938,13.94541c-.22316.00787-.44058-.07147-.60625-.22119-.3196-.35319-.3196-.89109,0-1.24428.16384-.15336.38199-.23518.60628-.2274.22867-.00917.45075.07774.61245.2397.1568.16244.24106.38151.23352.60716.01198.22733-.06733.45003-.2203.61862-.16794.15939-.3946.24176-.6257.22739Z"/><path d="m10,19c-.56396,0-1.07861-.26074-1.41211-.7168l-1.88916-2.2832h-2.55615c-.28857,0-.56885-.05664-.83398-.16797-.25488-.1084-.48389-.2627-.68115-.45996s-.35205-.42676-.45947-.68164c-.11133-.26465-.16797-.54492-.16797-.83301V4.14258c0-.28809.05664-.56836.16797-.83301.10742-.25488.26221-.48438.45947-.68164s.42627-.35156.68115-.45996c.26514-.11133.54541-.16797.83398-.16797h11.71484c.28857,0,.56885.05664.83398.16797.25488.1084.48389.2627.68115.45996s.35205.42676.45947.68164c.11133.26465.16797.54492.16797.83301v9.71484c0,.28809-.05664.56836-.16797.83301-.10742.25488-.26221.48438-.45947.68164s-.42627.35156-.68115.45996c-.26514.11133-.54541.16797-.83398.16797h-2.55762l-1.91504,2.31836c-.30615.4209-.8208.68164-1.38477.68164ZM4.14258,3.5c-.08691,0-.17139.0166-.25.05078-.0752.03125-.14551.0791-.20459.1377-.05957.05957-.10547.12793-.13721.20312-.03369.08008-.05078.16406-.05078.25098v9.71484c0,.08691.01709.1709.05078.25098.03174.0752.07764.14355.13721.20312.05908.05859.12939.10645.20459.1377.07861.03418.16309.05078.25.05078h2.67529c.39697,0,.77441.19141,1.00879.5127l1.94482,2.35059c.18457.24805.2998.21289.42969.03516l1.99951-2.4209c.20703-.28613.58447-.47754.98145-.47754h2.67529c.08691,0,.17139-.0166.25-.05078.0752-.03125.14551-.0791.20459-.1377.05957-.05957.10547-.12793.13721-.20312.03369-.08008.05078-.16406.05078-.25098V4.14258c0-.08691-.01709-.1709-.05078-.25098-.03174-.0752-.07764-.14355-.13721-.20312-.05908-.05859-.12939-.10645-.20459-.1377-.07861-.03418-.16309-.05078-.25-.05078H4.14258Zm2.50049,12.43262c.00195.00293.00391.00586.00684.00879l-.00684-.00879Zm6.74121-.03516l-.01855.02246c.00684-.00684.0127-.01465.01855-.02246Z"/><path d="m10,10.83496c-.41406,0-.75-.33594-.75-.75v-4.83496c0-.41406.33594-.75.75-.75s.75.33594.75.75v4.83496c0,.41406-.33594.75-.75.75Z"/></svg>`;
};
export default iconReportAbuse;
