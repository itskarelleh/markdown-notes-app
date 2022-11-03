import React, { useContext, useState } from 'react';
import { ThemeContext, light, dark } from '@/context/ThemeProvider';
import Modal from '../custom-bulma/Modal';
import { MarkdownHelperModal } from '../markdown-guide';

export default function HelpButtonAndModal() {

    const { toggle } = useContext(ThemeContext);
    const [ isOpen, setIsOpen ] = useState(false);

    const handleOpen = () => setIsOpen(!isOpen);

    return (
        <>
            <button onClick={handleOpen} title={"Help"}
            className="is-rounded is-info is-small button">
                <ion-icon name="help-outline"></ion-icon>
            </button>
            <Modal width={"75%"} open={isOpen} onClose={handleOpen}>
                <header className={`modal-card-head 
                ${!toggle ? light.text.classStyle : dark.text.classStyle }
                ${!toggle ? light.panel.classStyle : dark.panel.classStyle}`}>
                    <p className={`modal-card-title ${!toggle ? light.text.classStyle : dark.text.classStyle }`}>Help</p>
                    <button onClick={handleOpen} 
                    className="delete" aria-label='close'/>
                </header>
                <div className={`content-wrapper ${!toggle ? light.panel.classStyle : dark.panel.classStyle} 
                ${!toggle ? light.text.classStyle : dark.text.classStyle}`}>
                    <MarkdownHelperModal />
                </div>
            </Modal>
        </>
        
    )
}