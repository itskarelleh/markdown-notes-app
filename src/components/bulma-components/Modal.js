import React from 'react';

export default function Modal({ children, onClose, open, width }) {

    if(!open) return null;

    const active = open ? "is-active" : "";

    const modalContentWidth = !width ? "auto" : width;
    
    return (
        <div className={`modal ${active}`}>
            <div className="modal-background" onClick={onClose}></div>
            <div className="modal-content" style={{ width: modalContentWidth }}>
                {children}
            </div>
        </div>
    )
}