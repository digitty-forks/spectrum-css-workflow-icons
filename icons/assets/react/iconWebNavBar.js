import React from 'react';
                    
export default function iconWebNavBar({scale = 'M', color = 'LIGHT', ...props}) {
    return (
      <svg id="iconWebNavBar" width="20" height="20" viewBox="0 0 20 20" {...props}><circle cx="4.125" cy="6" r=".75"/><path d="m16.75,3H3.25c-1.24023,0-2.25,1.00928-2.25,2.25v9.5c0,1.24072,1.00977,2.25,2.25,2.25h13.5c1.24023,0,2.25-1.00928,2.25-2.25V5.25c0-1.24072-1.00977-2.25-2.25-2.25ZM2.5,5.25c0-.41357.33691-.75.75-.75h13.5c.41309,0,.75.33643.75.75v2.25H2.5v-2.25Zm0,9.5v-5.75h3.5v6.5h-2.75c-.41309,0-.75-.33643-.75-.75Zm14.25.75H7.5v-6.5h10v5.75c0,.41357-.33691.75-.75.75Z"/></svg>
    );
}
