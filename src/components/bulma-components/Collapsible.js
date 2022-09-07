import React from 'react';
import bulmaCollapsible from '@creativebulma/bulma-collapsible';

function Collapsible({ children, open, onOpen, onClose }) {
    
    return (
       <div>
            {children}
       </div>
    )
}

export default Collapsible;