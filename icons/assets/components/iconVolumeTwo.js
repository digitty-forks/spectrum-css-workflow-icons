import { html } from 'lit';

export const iconVolumeTwo = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m13.00098,12.74707c-.24219,0-.48047-.11719-.625-.33398-.22949-.34473-.13672-.80957.20801-1.04004.41113-.27441.66602-.80176.66602-1.37598s-.25488-1.10156-.66602-1.37598c-.34473-.23047-.4375-.69531-.20801-1.04004s.69434-.43652,1.04004-.20801c.83496.55762,1.33398,1.53809,1.33398,2.62402s-.49902,2.06641-1.33398,2.62402c-.12793.08496-.27246.12598-.41504.12598Z"/><path d="m16.25098,14.24707c-.24219,0-.48047-.11719-.625-.33301-.22949-.34473-.13672-.81055.20703-1.04102.87402-.58301,1.41699-1.68555,1.41699-2.87598,0-1.19141-.54297-2.29297-1.41602-2.87598-.34473-.22949-.4375-.69531-.20801-1.04004s.69531-.4375,1.04004-.20801c1.28516.85742,2.08398,2.4375,2.08398,4.12402,0,1.68555-.79785,3.26562-2.08301,4.12402-.12793.08496-.27344.12598-.41602.12598Z"/><path d="m9.24805,18.33691c-.4541,0-.89941-.17773-1.23535-.51367l-2.60352-2.60352c-.13965-.13965-.33301-.21973-.53027-.21973h-1.62891c-1.24023,0-2.25-1.00977-2.25-2.25v-5.5c0-1.24023,1.00977-2.25,2.25-2.25h1.62891c.19727,0,.39062-.08008.53027-.21973l2.60352-2.60352c.50195-.50293,1.25195-.65234,1.90723-.37891.65625.27148,1.08008.90625,1.08008,1.61621v13.17188c0,.70996-.42383,1.34473-1.08008,1.61621-.21777.09082-.44629.13477-.67188.13477ZM3.25,6.5c-.41309,0-.75.33691-.75.75v5.5c0,.41309.33691.75.75.75h1.62891c.5918,0,1.17188.24023,1.59082.65918l2.60352,2.60352c.10254.10156.21484.0791.27246.05371.05762-.02344.1543-.08496.1543-.23047V3.41406c0-.14551-.09668-.20703-.1543-.23047-.05762-.02539-.16992-.04785-.27246.05371l-2.60352,2.60352c-.41895.41895-.99902.65918-1.59082.65918h-1.62891Z"/></svg>`;
};
export default iconVolumeTwo;
