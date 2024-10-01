import { html } from 'lit';

export const iconAddContent = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m9.35156,17.25c0,.41406-.33594.75-.75.75H2.25c-1.24072,0-2.25-1.00928-2.25-2.25v-5.5c0-1.24072,1.00928-2.25,2.25-2.25h10.11621c.41406,0,.75.33594.75.75s-.33594.75-.75.75H2.25c-.41357,0-.75.33643-.75.75v3.8374l2.15674-2.15674c.7666-.7666,2.01465-.7666,2.78125,0l2.42334,2.54639c.23828.25.22803.64551-.02197.8833-.24951.23779-.64648.22852-.8833-.02197l-2.4126-2.53516c-.26904-.26807-.72314-.26758-1.00293.01123l-3.02289,3.02289c.04523.37061.34973.66266.73236.66266h6.35156c.41406,0,.75.33594.75.75Zm-3.92969-10.45459c.39746-.1167.62549-.5332.50879-.93066-.02588-.08789-.00439-.2085.10205-.27881l4.99951-3.31641c.16602-.11035.36572-.15039.56348-.10986.19678.04004.36572.1543.47656.32129l4.29248,6.48291c.14453.21777.38281.33594.62598.33594.14258,0,.28613-.04053.41357-.12451.34521-.229.43994-.69434.21143-1.03955L13.32324,1.65283c-.33252-.50146-.83984-.84375-1.4292-.96338-.58887-.11865-1.18994-.00244-1.69092.33008l-4.99951,3.31641c-.64307.42676-.9292,1.21094-.7124,1.95068.11621.39746.53418.625.93066.50879Zm3.86365,3.89563c-.57532,0-1.04169.46637-1.04169,1.04169,0,.57526.46637,1.04163,1.04169,1.04163.57526,0,1.04163-.46637,1.04163-1.04163,0-.57532-.46637-1.04169-1.04163-1.04169Z"/><path d="m15,10.5c-2.48535,0-4.5,2.01465-4.5,4.5s2.01465,4.5,4.5,4.5,4.5-2.01465,4.5-4.5-2.01465-4.5-4.5-4.5Zm2.5,5.125h-1.875v1.875c0,.34521-.27979.625-.625.625s-.625-.27979-.625-.625v-1.875h-1.875c-.34521,0-.625-.27979-.625-.625s.27979-.625.625-.625h1.875v-1.875c0-.34521.27979-.625.625-.625s.625.27979.625.625v1.875h1.875c.34521,0,.625.27979.625.625s-.27979.625-.625.625Z"/></svg>`;
};
export default iconAddContent;