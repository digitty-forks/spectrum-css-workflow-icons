import React from 'react';
                    
export default function iconShapes({scale = 'M', color = 'LIGHT', ...props}) {
    return (
      <svg id="iconShapes" width="20" height="20" viewBox="0 0 20 20" {...props}><path d="M11.83057,13H3.16992c-.81348,0-1.54199-.4209-1.94873-1.125-.40674-.70508-.40625-1.5459.00049-2.25L5.55176,2.125c.40625-.7041,1.13477-1.125,1.94775-1.125h.00049c.81348,0,1.54199.4209,1.94873,1.125l4.33008,7.5c.40674.70508.40674,1.5459,0,2.25s-1.13525,1.125-1.94824,1.125ZM7.5,2.5c-.13037,0-.4541.03613-.64941.375h0l-4.33008,7.5c-.19531.33887-.06543.6377,0,.75.06494.1123.2583.375.64941.375h8.66064c.39062,0,.58398-.26172.64893-.375.06543-.1123.1958-.41113.00049-.75l-4.33008-7.5c-.1958-.33887-.51953-.375-.6499-.375ZM6.20117,2.5h.00977-.00977Z"/><path d="M12.29395,18.92969c-.04395,0-.08838,0-.13281-.00098-2.354-.0459-4.53076-1.35156-5.68066-3.4082-.20215-.36133-.07275-.81836.28906-1.02051.36182-.20312.81787-.07227,1.02051.28809.89062,1.59375,2.57666,2.60547,4.40039,2.64062,1.35986.04004,2.6792-.4834,3.67139-1.4375.9917-.9541,1.55225-2.23828,1.5791-3.61426.04053-2.09375-1.17383-3.9873-3.09277-4.82422-.37988-.16602-.55322-.60742-.3877-.9873s.60791-.55371.9873-.3877c2.47754,1.08105,4.04492,3.52539,3.99316,6.22852-.03467,1.77637-.75879,3.43359-2.03955,4.66602-1.24805,1.2002-2.87988,1.85742-4.60742,1.85742Z"/></svg>
    );
}