import { html } from 'lit';

export const iconCheckmarkCircle = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m10,18.75c-4.8252,0-8.75-3.9248-8.75-8.75S5.1748,1.25,10,1.25s8.75,3.9248,8.75,8.75-3.9248,8.75-8.75,8.75Zm0-16c-3.99805,0-7.25,3.25195-7.25,7.25s3.25195,7.25,7.25,7.25,7.25-3.25195,7.25-7.25-3.25195-7.25-7.25-7.25Z"/><path d="m9.18262,13.94336c-.21191,0-.41504-.08984-.55762-.24805l-2.64355-2.93945c-.27734-.30859-.25195-.78223.05566-1.05957s.78125-.25195,1.05957.05566l2.02637,2.25391,3.7002-5.0459c.24316-.33301.71191-.40918,1.04785-.16113.33398.24414.40625.71387.16113,1.04785l-4.24512,5.79004c-.13281.18262-.3418.29492-.56738.30566-.01172.00098-.02441.00098-.03711.00098Z"/></svg>`;
};
export default iconCheckmarkCircle;
