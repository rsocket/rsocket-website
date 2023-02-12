import React from 'react';
import { SupportRibbon } from './SupportRibbon';

// Default implementation, that you can customize
export default function Root({children}) {
    console.log('Root', children);
    return (
        <>
            <SupportRibbon />
            {children}
        </>
    );
}