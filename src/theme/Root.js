import React from 'react';
import { SupportRibbon } from './SupportRibbon';

// https://docusaurus.io/docs/swizzling#wrapper-your-site-with-root
export default function Root({children}) {
    return (
        <>
            <SupportRibbon />
            {children}
        </>
    );
}