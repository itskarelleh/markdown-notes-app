import React, { useContext } from 'react';
import ToggleMenu from './ToggleMenu';
import ThemeToggleButton from '../buttons/ThemeToggleButton';
import { ThemeContext } from '../../context/ThemeProvider';

export default function Navigation() {
    
    const { theme } = useContext(ThemeContext);

    return (
        <nav role="navigation" aria-label="main navigation"
        className={`navbar ${theme.background.className} is-fixed-top`}>
            <div className="block ml-2 is-flex-direction-row is-align-items-center" style={{ height: '100%' }}>
                <ToggleMenu />
                <div style={{ width: "12rem", paddingLeft: '1.25rem' }}
                className="is-flex nav-branding navbar-brand is-flex-direction-column m-0 is-justify-content-center">
                    <a classsName="navbar-item" href="/">
                        <h1 className={`my-0 is-size-5-mobile has-text-weight-bold is-size-5 ${theme.text.className}`} 
                        >Markdown Notes</h1>
                    </a>
                </div>
                <div className="brand-menu-bg">
                </div>
                <div className="theme-toggle-btn">
                    <ThemeToggleButton />
                </div>
            </div>
        </nav>
    )
}
