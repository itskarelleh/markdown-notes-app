import React, { useContext } from 'react';
import { Button } from 'react-bulma-components';
import { ThemeContext, light, dark } from '../../context/ThemeProvider';

export default function ThemeToggleButton() {

    const { toggle, toggleTheme } = useContext(ThemeContext);

    return (
        <Button style={{ border: 'none' }}
        onClick={toggleTheme}
        color={!toggle ? light.panel.style : dark.panel.style }>
            {toggle ? <ion-icon name="sunny-outline"></ion-icon> : <ion-icon name="sunny-outline"></ion-icon>}
        </Button>
    )
}