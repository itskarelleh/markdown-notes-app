import React, { useContext } from 'react';
import ToggleMenu from './ToggleMenu';
import { Heading, Navbar, Block } from 'react-bulma-components';
import ThemeToggleButton from '../buttons/ThemeToggleButton';
import { ThemeContext, light, dark } from '../../context/ThemeProvider';

export default function Navigation() {
    
    const { toggle, theme } = useContext(ThemeContext);

    return (
        <nav role="navigation" aria-label="main navigation"
        className={`navbar ${theme.background.className} is-fixed-top`}>
            <div className="block ml-2 is-flex-direction-row is-align-items-center" style={{ height: '100%' }}>
                <ToggleMenu />
                <div style={{ width: "12rem", paddingLeft: '1.25rem' }}
                className="is-flex nav-branding navbar-brand is-flex-direction-column m-0 is-align-content-start">
                    <a classsName="navbar-item" href="/">
                        <h1 className={`my-0 is-size-5-mobile has-text-weight-bold is-size-4 ${theme.text.className}`} 
                        >Notes</h1>
                        <h2 className={`my-0 is-size-7-mobile has-text-weight-medium is-size-5 ${theme.text.className}`}>Markdown Editor</h2>
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
// return (
//     <Navbar style={{ backgroundColor: "none"}}>
//         <Navbar.Container flexDirection='row' flexWrap='wrap' 
//         justifyContent='space-between' className="is-flex"
//          style={{ width: '100%' }}>
//         <Block ml={6} display="flex" alignItems="center" style={{ height: '100%' }}>
//                 <ToggleMenu />
//                 <Navbar.Brand pl={5} m={0} 
//                 flexDirection="column" style={{ width: "12rem", paddingLeft: '1.25rem' }}
//                 className="is-flex nav-branding" alignItems='start'>
//                     <Heading className={`my-0 is-size-5-mobile ${!toggle ? light.text.className : dark.text.className }`} 
//                     renderAs='h1'>Notes</Heading>
//                     <Heading className={`my-0 is-size-7-mobile ${!toggle ? light.text.className : dark.text.className }`}  renderAs='h6' size="6">Markdown Editor</Heading>
//                 </Navbar.Brand>
//                 <div className="brand-menu-bg">
//                 </div>
//             <div className="theme-toggle-btn">
//                 <ThemeToggleButton />
//             </div>
//         </Block>
//         </Navbar.Container>
//     </Navbar>