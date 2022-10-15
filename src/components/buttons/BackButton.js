import React, { useContext } from 'react';
import { NotesContext } from '../../context/NotesProvider';
import { dark, light, ThemeContext } from '../../context/ThemeProvider';

export default function BackButton() {

    const { toggle } = useContext(ThemeContext);
    const { clearSelected } = useContext(NotesContext);

    return (
        <button 
        onClick={clearSelected}
        className={`button is-small is-rounded ${toggle ? light.panel.className : [dark.panel.className, dark.text.className] }`} 
        title="Back to main menu">
            <ion-icon name="arrow-back-outline"></ion-icon>
        </button>
    )
}