import React, { useContext } from 'react';
import { EditorContext } from '@/context/EditorProvider';
import { Button } from 'react-bulma-components';

const HtmlAndTextButton = () => {

    const { isTextView, toggleTextView } = useContext(EditorContext);

    return (
        <div className="buttons">
            <Button className={`is-align-self-flex-end ${!isTextView ? `is-dark` : `is-light`}`}
            title={`Click to see in Text`} size="small"
            onClick={toggleTextView}>Text</Button>
            <Button className={`is-align-self-flex-end ${isTextView === false ? `is-light` : `is-dark`}`}
            title={`Click to see in HTML`} 
            size="small" onClick={toggleTextView}>HTML</Button>
        </div>
        
    )
}

export default HtmlAndTextButton;