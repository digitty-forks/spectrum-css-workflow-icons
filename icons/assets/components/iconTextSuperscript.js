import { html } from 'lit';

export const iconTextSuperscript = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m18,7.2041c-.41406,0-.75-.33594-.75-.75v-3.62598l-.49414.20898c-.37793.15918-.82129-.01758-.98242-.40039-.16016-.38086.01855-.82129.40039-.98242l1.53516-.64746c.22949-.09766.49609-.07227.70605.06641.20898.13867.33496.37402.33496.625v4.75586c0,.41406-.33594.75-.75.75Z"/><path d="m12.5,2H3.5c-1.24023,0-2.25,1.00977-2.25,2.25v1.11035c0,.41406.33594.75.75.75s.75-.33594.75-.75v-1.11035c0-.41309.33691-.75.75-.75h3.75v13h-1.62012c-.41406,0-.75.33594-.75.75s.33594.75.75.75h4.63965c.41406,0,.75-.33594.75-.75s-.33594-.75-.75-.75h-1.51953V3.5h3.75c.41309,0,.75.33691.75.75v1.11035c0,.41406.33594.75.75.75s.75-.33594.75-.75v-1.11035c0-1.24023-1.00977-2.25-2.25-2.25Z"/></svg>`;
};
export default iconTextSuperscript;
