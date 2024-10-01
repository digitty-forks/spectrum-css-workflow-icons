import { html } from 'lit';

export const iconCameraProperties = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m18.68701,12h-.75c-.00177,0-.0033.00098-.00507.00098-.3103-.87158-1.13525-1.50098-2.11212-1.50098-.97644,0-1.80121.62891-2.11182,1.5h-4.396c-.41406,0-.75.33594-.75.75s.33594.75.75.75h4.396c.31061.87109,1.13538,1.5,2.11182,1.5.97687,0,1.80182-.62939,2.11212-1.50098.00177,0,.0033.00098.00507.00098h.75c.41406,0,.75-.33594.75-.75s-.33594-.75-.75-.75Zm-2.86719,1.5c-.41357,0-.75-.33643-.75-.75s.33643-.75.75-.75.75.33643.75.75-.33643.75-.75.75Z"/><path d="m18.68701,16.5h-4.396c-.31061-.87109-1.13538-1.5-2.11182-1.5-.97687,0-1.80182.62939-2.11212,1.50098-.00177,0-.0033-.00098-.00507-.00098h-.75c-.41406,0-.75.33594-.75.75s.33594.75.75.75h.75c.00177,0,.0033-.00098.00507-.00098.3103.87158,1.13525,1.50098,2.11212,1.50098.97644,0,1.80121-.62891,2.11182-1.5h4.396c.41406,0,.75-.33594.75-.75s-.33594-.75-.75-.75Zm-6.50781,1.5c-.41357,0-.75-.33643-.75-.75s.33643-.75.75-.75.75.33643.75.75-.33643.75-.75.75Z"/><path d="m7.14404,16h-3.89404c-1.24072,0-2.25-1.00928-2.25-2.25v-7.5c0-1.24072,1.00928-2.25,2.25-2.25h1.82275c.28613,0,.54297-.15869.6709-.41406l.1709-.34229c.3833-.76709,1.1543-1.24365,2.0127-1.24365h4.14551c.8584,0,1.62939.47656,2.0127,1.24414l.1709.34131c.12793.25586.38477.41455.6709.41455h1.82275c1.24072,0,2.25,1.00928,2.25,2.25v2.71289c0,.41406-.33594.75-.75.75s-.75-.33594-.75-.75v-2.71289c0-.41357-.33643-.75-.75-.75h-1.82275c-.8584,0-1.62939-.47656-2.0127-1.24414l-.1709-.34131c-.12793-.25586-.38477-.41455-.6709-.41455h-4.14551c-.28613,0-.54297.15869-.6709.41406l-.1709.34229c-.3833.76709-1.1543,1.24365-2.0127,1.24365h-1.82275c-.41357,0-.75.33643-.75.75v7.5c0,.41357.33643.75.75.75h3.89404c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"/><path d="m7.1167,11.75c-.27051,0-.53174-.14697-.66553-.40332-.29541-.56641-.45117-1.20459-.45117-1.84668,0-2.20557,1.79443-4,4-4,1.99072,0,3.69434,1.48535,3.96338,3.45508.05615.41064-.23145.78857-.6416.84473-.41895.05664-.78906-.23145-.84473-.6416-.16797-1.23047-1.23291-2.1582-2.47705-2.1582-1.37842,0-2.5,1.12158-2.5,2.5,0,.40723.09473.79541.28125,1.15332.19141.36719.04883.82031-.31836,1.01172-.11084.05762-.22949.08496-.34619.08496Z"/></svg>`;
};
export default iconCameraProperties;