import React, { useContext } from 'react';
import ToggleMenu from './ToggleMenu';
import { Heading, Navbar, Block } from 'react-bulma-components';
import ThemeToggleButton from '../buttons/ThemeToggleButton';
import { ThemeContext, light, dark } from '../../context/ThemeProvider';

export default function Navigation() {
    
    const { toggle } = useContext(ThemeContext);

    return (
        <Navbar fixed='top'>
            <Navbar.Container flexDirection='row' flexWrap='wrap' 
            backgroundColor={!toggle ? light.panel.style : dark.panel.style }
            justifyContent='space-between'
            className="is-flex" style={{ width: '100%' }}>
            <Block display="flex" alignItems="center" style={{ height: '100%' }}>
                    <ToggleMenu />
                    <Navbar.Brand pl={5} m={0} 
                    flexDirection="column" style={{ width: "12rem", paddingLeft: '1.25rem' }}
                    className={`is-flex nav-branding ${!toggle ? light.panel.className : dark.panel.className }`}
                    alignItems='start'>
                        <Heading className={`my-0 is-size-5-mobile ${!toggle ? light.text.className : dark.text.className }`} 
                        renderAs='h1'>Notes</Heading>
                        <Heading className={`my-0 is-size-7-mobile ${!toggle ? light.text.className : dark.text.className }`}  renderAs='h6' size="6">Markdown Editor</Heading>
                    </Navbar.Brand>
                    <div className="brand-menu-bg">
                    </div>
                
                <div className="theme-toggle-btn">
                    <ThemeToggleButton />
                </div>
            </Block>
            </Navbar.Container>
        </Navbar>
    )
}