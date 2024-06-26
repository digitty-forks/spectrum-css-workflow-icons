import React from 'react';
                    
export default function iconArrowHeadTool({scale = 'M', color = 'LIGHT', ...props}) {
    return (
      <svg id="iconArrowHeadTool" width="20" height="20" viewBox="0 0 20 20" {...props}><path d="m17.25,2h-4.25c-.41406,0-.75.33594-.75.75s.33594.75.75.75h2.43945L2.34521,16.59424c-.29297.29297-.29297.76758,0,1.06055.14648.14648.33838.21973.53027.21973s.38379-.07324.53027-.21973l13.09424-13.09424v2.43945c0,.41406.33594.75.75.75s.75-.33594.75-.75V2.75c0-.41406-.33594-.75-.75-.75Z"/></svg>
    );
}
