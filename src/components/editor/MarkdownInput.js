import React from 'react';

function MarkdownInput({ value, onChange }) {
    
    return (
        <>
        <textarea style={{ height: "100vh" }} 
        className="textarea has-fixed-size is-fullheight"
        value={value} 
        onChange={onChange}>
        </textarea>
        </>
    )
}

export default MarkdownInput;