import React, { useState, useEffect } from 'react';

const ThemeContext = React.createContext(false);

const light = {
    background: {
        className: 'has-background-grey-lighter',
        style: 'light'
    },
    button: 'white',
    panel: {
        style: 'white',
        className: 'has-background-white'
    },
    text: {
        className: 'has-text-dark',
        style: 'dark',
    },
    textConstrast: 'white',
};

const dark = {
    background: {
        className: 'has-background-black-bis',
        style: 'black'
    },
    panel: {
        style: 'dark',
        className: 'has-background-grey-darker'
    },
    text: {
        className: 'has-text-white',
        style: 'light',
    },
    textConstrast: 'white',
};

function ThemeProvider({ children }) {
    
    const [ toggle, setToggle ] = useState(JSON.parse(localStorage.getItem('darkmode') || false ));
    const [ theme, setTheme ] = useState(light);

    useEffect(() => {
        setToggle(JSON.parse(localStorage.getItem('darkmode')));
    }, []);

    useEffect(() => {
        localStorage.setItem('darkmode', JSON.stringify(toggle));
    }, [toggle, theme]);

    function toggleTheme() {
        setToggle(prev => !prev);

        if(toggle === false) {
            setTheme(light);
        } 
        
        if(toggle === true) {
            setTheme(dark);
        }
    };

    return (
        <ThemeContext.Provider value={{ toggle, theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider, ThemeContext, light, dark };