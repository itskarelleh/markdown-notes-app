import React, { useContext } from 'react';
import { Button } from 'react-bulma-components';
import { ThemeContext, dark, light } from '../../context/ThemeProvider';

export default function Modal({ children, onClose, open }) {

    const { toggle } = useContext(ThemeContext);

    if(!open) return null;

    const active = open ? "is-active" : "";
    
    return (
        <div className={`modal ${active}`}>
            <div className="modal-background"></div>
            <div className={`modal-content`}>
                <div className="actions">
                </div>
                {children}
            </div>
        </div>
    )
}