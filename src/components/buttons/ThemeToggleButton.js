import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';

export default function ThemeToggleButton() {

    const { toggle, theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button style={{ border: 'none', background: 'none' }}
        onClick={toggleTheme}
        className={`button ${theme.text.className}`}>
            {toggle ? <ion-icon name="sunny-outline"></ion-icon> : <ion-icon name="moon-outline"></ion-icon>}
        </button>
    )
}