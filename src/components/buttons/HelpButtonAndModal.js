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
            <Modal open={isOpen} onClose={handleOpen}>
                <div className={`p-6 content-wrapper ${!toggle ? light.panel.className : dark.panel.className}`}>
                    <MarkdownHelperModal />
                </div>
            </Modal>
        </>
        
    )
}