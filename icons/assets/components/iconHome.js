import { html } from 'lit';

export const iconHome = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m17.13086,5.73438L11.38086,1.26172c-.8125-.63086-1.94922-.63184-2.76172.00098L2.86914,5.73438h-.00098c-.54395.42285-.86816,1.08691-.86816,1.77637v8.23926c0,1.24023,1.00977,2.25,2.25,2.25h11.5c1.24023,0,2.25-1.00977,2.25-2.25V7.51074c0-.68945-.32422-1.35352-.86914-1.77637Zm-5.63086,10.76562h-3v-4.75c0-.41309.33691-.75.75-.75h1.5c.41309,0,.75.33691.75.75v4.75Zm5-.75c0,.41309-.33691.75-.75.75h-2.75v-4.75c0-1.24023-1.00977-2.25-2.25-2.25h-1.5c-1.24023,0-2.25,1.00977-2.25,2.25v4.75h-2.75c-.41309,0-.75-.33691-.75-.75V7.51074c0-.22949.1084-.45117.28906-.59277l5.75-4.4707c.27246-.21191.65137-.20898.92188-.00098l5.74902,4.47168c.18164.1416.29004.36328.29004.59277v8.23926Z"/></svg>`;
};
export default iconHome;