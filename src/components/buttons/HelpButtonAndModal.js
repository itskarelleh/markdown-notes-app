import React, { useContext, useState } from 'react';
import { ThemeContext, light, dark } from '../../context/ThemeProvider';
import Modal from '../custom-bulma/Modal';
import { MarkdownHelperModal } from '../markdown-guide';

export default function HelpButtonAndModal() {

    const { toggle } = useContext(ThemeContext);
    const [ isOpen, setIsOpen ] = useState(true);

    const handleOpen = () => setIsOpen(!isOpen);

    return (
        <>
            <button onClick={handleOpen} title={"Help"}
            className="is-rounded is-info is-small button">
                <ion-icon name="help-outline"></ion-icon>
            </button>
            <Modal width={"75%"} open={isOpen} onClose={handleOpen}>
                <header className="modal-card-head-wrapper">
                    <div className={`modal-card-head 
                    ${!toggle ? light.text.className : dark.text.className }
                    ${!toggle ? light.panel.className : dark.panel.className}`}>
                        <p className={`modal-card-title ${!toggle ? light.text.className : dark.textConstrast.className }`}>
                            Tips on How to write in Markdown
                        </p>
                        <button onClick={handleOpen} 
                        className="delete" aria-label='close'/>
                    </div>
                </header>
                <div className={`content-wrapper ${!toggle ? light.panel.className : dark.panel.className} 
                ${!toggle ? light.text.className : dark.text.className}`}>
                    <MarkdownHelperModal />
                </div>
            </Modal>
        </>
        
    )
}