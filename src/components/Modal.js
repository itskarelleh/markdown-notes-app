import React from 'react';
import { Button } from 'react-bulma-components';

export default function Modal({ children, onClose, open }) {

    if(!open) return null;

    const active = open ? "is-active" : "";
    
    return (
        <div className={`modal ${active}`}>
            <div className="modal-background"></div>
            <div className="modal-content">
                <div className="actions">
                    {onClose && <Button className="delete" 
                    onClick={onClose}
                    aria-label="close"></Button> }
                </div>
                {children}
            </div>
        </div>
    )
}
