import React from 'react';
                    
export default function iconCollection({scale = 'M', color = 'LIGHT', ...props}) {
    return (
      <svg id="iconCollection" width="20" height="20" viewBox="0 0 20 20" {...props}><path d="M16.75,3H3.25c-1.24023,0-2.25,1.00977-2.25,2.25v9.5c0,1.24023,1.00977,2.25,2.25,2.25h13.5c1.24023,0,2.25-1.00977,2.25-2.25V5.25c0-1.24023-1.00977-2.25-2.25-2.25ZM17.5,5.25v4h-4v-4.75h3.25c.41309,0,.75.33691.75.75ZM8,9.25v-4.75h4v4.75h-4ZM12,10.75v4.75h-4v-4.75h4ZM3.25,4.5h3.25v4.75H2.5v-4c0-.41309.33691-.75.75-.75ZM2.5,14.75v-4h4v4.75h-3.25c-.41309,0-.75-.33691-.75-.75ZM16.75,15.5h-3.25v-4.75h4v4c0,.41309-.33691.75-.75.75Z" stroke-width="0"/></svg>
    );
}