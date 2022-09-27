import React, { useState } from 'react';

const EditorContext = React.createContext();

function EditorProvider({ children }) {

    const [ isTextView, setIsTextView ] = useState(false);
    const [ isMobile, setIsMobile ] = useState(false);
    const [ isEditing, setIsEditing ] = useState(true);
    
    function toggleEditing() {
        setIsEditing(prev => !prev);
        console.log(isEditing);
    }

    function toggleMobile() {
        setIsMobile(prev => !prev);
    }

    function toggleTextView() {
        setIsTextView(prev => !prev);
    }

    return (
        <EditorContext.Provider value={{ isTextView,  isMobile, isEditing, 
        toggleTextView, toggleMobile, toggleEditing }}>
            {children}
        </EditorContext.Provider>
    )
}


export { EditorContext, EditorProvider }