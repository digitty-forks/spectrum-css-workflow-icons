import React from 'react';
                    
export default function iconImage({scale = 'M', color = 'LIGHT', ...props}) {
    return (
      <svg id="iconImage" width="20" height="20" viewBox="0 0 20 20" {...props}><path d="m14.5,7.52114c0,.82843-.67157,1.5-1.5,1.5-.82843,0-1.5-.67157-1.5-1.5,0-.82843.67157-1.5,1.5-1.5s1.5.67157,1.5,1.5h0"/><path d="m16.75,3H3.25c-1.24023,0-2.25,1.00977-2.25,2.25v9.5c0,1.24023,1.00977,2.25,2.25,2.25h13.5c1.24023,0,2.25-1.00977,2.25-2.25V5.25c0-1.24023-1.00977-2.25-2.25-2.25Zm-13.5,1.5h13.5c.41309,0,.75.33691.75.75v8.21094l-1.90918-1.90918c-.87695-.87695-2.30469-.87695-3.18164,0l-1.23145,1.23145c-.09961.09766-.25684.09668-.35449.00098l-3.23242-3.23242c-.84961-.84961-2.33203-.84961-3.18164,0l-1.90918,1.90918v-6.21094c0-.41309.33691-.75.75-.75Zm0,11c-.41309,0-.75-.33691-.75-.75v-1.16797l2.96973-2.96973c.29297-.29297.76758-.29297,1.06055,0l3.2334,3.2334c.68164.67969,1.79199.68066,2.47363-.00098l1.23242-1.23242c.29297-.29297.76758-.29297,1.06055,0l2.70068,2.70068c-.1311.11206-.29565.18701-.48096.18701H3.25Z"/></svg>
    );
}
