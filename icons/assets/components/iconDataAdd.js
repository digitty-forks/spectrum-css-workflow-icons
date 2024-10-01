import { html } from 'lit';

export const iconDataAdd = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="M15,10.521c-2.48529,0-4.5,2.01489-4.5,4.5,0,2.48535,2.01471,4.5,4.5,4.5s4.5-2.01465,4.5-4.5c0-2.48511-2.01471-4.5-4.5-4.5ZM17.5,15.64648h-1.875v1.875c0,.34473-.27979.625-.625.625s-.625-.28027-.625-.625v-1.875h-1.875c-.34521,0-.625-.28027-.625-.625s.27979-.625.625-.625h1.875v-1.875c0-.34473.27979-.625.625-.625s.625.28027.625.625v1.875h1.875c.34521,0,.625.28027.625.625s-.27979.625-.625.625Z"/><path d="M18,4c0-2.06152-4.14697-3-8-3S2,1.93848,2,4v9.8252c0,.0271.01263.05029.01544.07666.16083,1.62158,2.84814,2.57202,5.37567,2.92236.03516.00488.06982.00684.104.00684.36865,0,.68994-.27148.7417-.64746.05713-.41016-.22949-.78809-.63965-.8457-2.81396-.38965-4.0542-1.28418-4.09717-1.58789v-3.34448c1.34125.74292,3.37274,1.18506,5.24658,1.30444.01611.00195.03223.00195.04834.00195.39258,0,.72266-.30469.74805-.70215.02637-.41309-.28711-.76953-.70068-.7959-3.00732-.19238-5.02588-1.09863-5.32715-1.67773-.00385-.00732-.01105-.01147-.01514-.0188v-2.6709c1.55219.78394,4.08337,1.15356,6.5,1.15356s4.94781-.36963,6.5-1.15356v1.90356c0,.41406.33594.75.75.75s.75-.33594.75-.75v-3.75ZM10,5.5c-4.27094,0-6.40741-1.08984-6.5-1.49341v-.00146c.09259-.41528,2.22906-1.50513,6.5-1.50513,4.25342,0,6.39014,1.08105,6.49902,1.5-.10889.41895-2.24561,1.5-6.49902,1.5Z"/></svg>`;
};
export default iconDataAdd;