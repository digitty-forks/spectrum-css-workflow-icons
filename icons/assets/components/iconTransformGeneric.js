import { html } from 'lit';

export const iconTransformGeneric = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m18.375,10c0-.90698-.57361-1.67725-1.375-1.98145v-2.28711c.80139-.30444,1.375-1.07446,1.375-1.98145,0-1.17188-.95312-2.125-2.125-2.125-.90698,0-1.67706.57373-1.98151,1.375h-2.28693c-.30444-.80127-1.07458-1.375-1.98157-1.375s-1.67706.57373-1.98151,1.375h-2.28693c-.30444-.80127-1.07458-1.375-1.98157-1.375-1.17188,0-2.125.95312-2.125,2.125,0,.90698.57361,1.677,1.375,1.98145v2.28711c-.80139.30444-1.375,1.07446-1.375,1.98145s.57361,1.677,1.375,1.98145v2.28711c-.80139.30444-1.375,1.07446-1.375,1.98145,0,1.17188.95312,2.125,2.125,2.125.90698,0,1.67706-.57373,1.98151-1.375h2.28699c.30444.80127,1.07452,1.375,1.98151,1.375s1.67706-.57373,1.98151-1.375h2.28699c.30444.80127,1.07452,1.375,1.98151,1.375,1.17188,0,2.125-.95312,2.125-2.125,0-.90698-.57361-1.67725-1.375-1.98145v-2.28711c.80139-.30444,1.375-1.07446,1.375-1.98145Zm-4.10651,5.5h-2.28693c-.30444-.80127-1.07458-1.375-1.98157-1.375s-1.67706.57373-1.98151,1.375h-2.28693c-.21552-.56738-.66425-1.01611-1.23157-1.23145v-2.28711c.80139-.30444,1.375-1.07446,1.375-1.98145s-.57361-1.67725-1.375-1.98145v-2.28711c.56732-.21533,1.01599-.66406,1.23151-1.23145h2.28699c.30444.80127,1.07452,1.375,1.98151,1.375s1.67706-.57373,1.98151-1.375h2.28699c.21552.56738.66418,1.01611,1.23151,1.23145v2.28711c-.80139.30444-1.375,1.07446-1.375,1.98145s.57361,1.677,1.375,1.98145v2.28711c-.56732.21533-1.01599.66406-1.23151,1.23145Zm1.98151-4.625c-.48242,0-.875-.39258-.875-.875s.39258-.875.875-.875.875.39258.875.875-.39258.875-.875.875Zm0-8c.48242,0,.875.39258.875.875s-.39258.875-.875.875-.875-.39258-.875-.875.39258-.875.875-.875Zm-6.25,0c.48242,0,.875.39258.875.875s-.39258.875-.875.875-.875-.39258-.875-.875.39258-.875.875-.875Zm-6.25,0c.48242,0,.875.39258.875.875s-.39258.875-.875.875-.875-.39258-.875-.875.39258-.875.875-.875Zm0,6.25c.48242,0,.875.39258.875.875s-.39258.875-.875.875-.875-.39258-.875-.875.39258-.875.875-.875Zm0,8c-.48242,0-.875-.39258-.875-.875s.39258-.875.875-.875.875.39258.875.875-.39258.875-.875.875Zm6.25,0c-.48242,0-.875-.39258-.875-.875s.39258-.875.875-.875.875.39258.875.875-.39258.875-.875.875Zm6.25,0c-.48242,0-.875-.39258-.875-.875s.39258-.875.875-.875.875.39258.875.875-.39258.875-.875.875Z"/></svg>`;
};
export default iconTransformGeneric;
