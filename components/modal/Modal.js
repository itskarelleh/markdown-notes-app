import React from 'react';

export default function Modal({ children, onClose, open, width }) {

    if(!open) return null;

    const active = open ? "is-active" : "";

    const modalContentWidth = !width ? "auto" : width;
    
    return (
        <div className={`modal ${active} fixed z-998`}>
            <div className="modal-background bg-zinc-900/75" onClick={onClose}></div>
            <div className="modal-content bg-white dark:bg-zinc-800" style={{ width: modalContentWidth }}>
                {children}
            </div>
        </div>
    )
}