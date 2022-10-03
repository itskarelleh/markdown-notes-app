import React, { useContext, useState } from 'react';
import { Button, Block, Container } from 'react-bulma-components';
import { ThemeContext, light, dark } from '../../context/ThemeProvider';
import Modal from '../bulma-components/Modal';
import { MarkdownHelperModal } from '../markdown-guide';

export default function HelpButtonAndModal() {

    const { toggle } = useContext(ThemeContext);
    const [ isOpen, setIsOpen ] = useState(false);

    const handleOpen = () => setIsOpen(!isOpen);

    return (
        <>
            <Button onClick={handleOpen}
            color={toggle ? "light" : "dark"} title={"Help"} size="small" className="is-rounded">
                <ion-icon name="help-outline"></ion-icon>
            </Button>
            <Modal width={"75%"} open={isOpen} onClose={handleOpen}>
                <header className={`modal-card-head 
                ${!toggle ? light.text.className : dark.text.className }
                ${!toggle ? light.panel.className : dark.panel.className}`}>
                    <p className={`modal-card-title ${!toggle ? light.text.className : dark.text.className }`}>Help</p>
                    <button onClick={handleOpen} 
                    className="delete" aria-label='close'/>
                </header>
                <div className={`p-6 content-wrapper ${!toggle ? light.panel.className : dark.panel.className} 
                ${!toggle ? light.text.className : dark.text.className}`}>
                    <MarkdownHelperModal />
                </div>
            </Modal>
        </>
        
    )
}