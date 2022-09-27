import React, { useState, useEffect } from 'react';

const ThemeContext = React.createContext(false);

const light = {
    background: {
        className: 'has-background-light',
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
}

const dark = {
    background: {
        className: 'has-background-black',
        style: 'black'
    },
    panel: {
        style: 'dark',
        className: 'has-background-dark'
    },
    text: {
        className: 'has-text-light',
        style: 'light',
    },
    textConstrast: 'white',
}

function ThemeProvider({ children }) {
    
    const [ toggle, setToggle ] = useState(JSON.parse(localStorage.getItem('darkmode') || false ));

    useEffect(() => {
        setToggle(JSON.parse(localStorage.getItem('darkmode')));
    }, []);

    useEffect(() => {
        localStorage.setItem('darkmode', JSON.stringify(toggle));
    }, [toggle]);

    function toggleTheme() {
        setToggle(!toggle);
    };

    return (
        <ThemeContext.Provider value={{ toggle, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider, ThemeContext, light, dark };