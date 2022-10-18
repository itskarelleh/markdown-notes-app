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
    textConstrast: {
        style: 'white',
        className: 'has-text-white'
    },
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
    textConstrast: {
        style: 'white',
        className: 'has-text-white'
    },
};

function ThemeProvider({ children }) {
    
    const [ toggle, setToggle ] = useState(JSON.parse(localStorage.getItem('darkmode') || false ));
    const [ theme, setTheme ] = useState(() => {
        if(!toggle) return light;
        else return dark;
    });

    useEffect(() => {
        setToggle(JSON.parse(localStorage.getItem('darkmode')));
    }, []);

    useEffect(() => {
        localStorage.setItem('darkmode', JSON.stringify(toggle));
    }, [theme, toggle]);

    useEffect(() => {
        setTheme(() => {
            if(!toggle){ 
                return light;
            } else {
                return dark;
            }
        });
    }, [toggle])

    function toggleTheme() {
        setToggle(!toggle);
    };

    return (
        <ThemeContext.Provider value={{ toggle, theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider, ThemeContext, light, dark };