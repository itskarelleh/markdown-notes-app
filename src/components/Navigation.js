import React from 'react';
import ToggleMenu from './ToggleMenu';
import { Navbar } from 'react-bulma-components';

export default function Navigation() {
    
    return (
        <Navbar>
            <Navbar.Brand>
            <ToggleMenu />
                <h1>Notes</h1>
            </Navbar.Brand>
        </Navbar>
    )
}