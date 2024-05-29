import { html } from 'lit';

export const iconLightbulb = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m10,2.24121c-.41406,0-.75-.33594-.75-.75v-.7002c0-.41406.33594-.75.75-.75s.75.33594.75.75v.7002c0,.41406-.33594.75-.75.75Z"/><path d="m18.4541,10.02148h-.7002c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h.7002c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"/><path d="m2.23242,10.02148h-.7002c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h.7002c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"/><path d="m4.51074,4.53906c-.19238,0-.38379-.07324-.53027-.21973l-.49512-.49512c-.29297-.29297-.29297-.76758,0-1.06055s.76758-.29297,1.06055,0l.49512.49512c.29297.29297.29297.76758,0,1.06055-.14648.14648-.33789.21973-.53027.21973Z"/><path d="m15.47559,4.53906c-.19238,0-.38379-.07324-.53027-.21973-.29297-.29297-.29297-.76758,0-1.06055l.49512-.49512c.29297-.29297.76758-.29297,1.06055,0s.29297.76758,0,1.06055l-.49512.49512c-.14648.14648-.33789.21973-.53027.21973Z"/><path d="m16,9.5c0-3.30859-2.69141-6-6-6s-6,2.69141-6,6c0,2.2157,1.21021,4.1499,3.00122,5.18896,0,.00232-.00122.00415-.00122.00635v1.80469c0,1.6543,1.3457,3,3,3s3-1.3457,3-3v-1.81177c1.79041-1.03931,3-2.97314,3-5.18823Zm-4.5,7c0,.82715-.67285,1.5-1.5,1.5s-1.5-.67285-1.5-1.5v-1.19751c.48047.12439.9812.19751,1.5.19751s1.01953-.07312,1.5-.19751v1.19751Zm-1.5-2.5c-2.48145,0-4.5-2.01855-4.5-4.5s2.01855-4.5,4.5-4.5,4.5,2.01855,4.5,4.5-2.01855,4.5-4.5,4.5Z"/></svg>`;
};
export default iconLightbulb;
