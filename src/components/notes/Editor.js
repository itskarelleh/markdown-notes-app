import React, { useContext, useEffect, useState } from 'react';
import { NotesContext } from '../../context';
import { NoNotesDetected } from './Notes';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

const rawMarkup = (data) => {
    let raw = DOMPurify.sanitize(marked.parse(data));
    return {__html: raw};
}

const MarkDownEditor = () => {

}


// const HTMLView = () => {
//     const { selected } = useContext(NotesContext);

//     return (
//         <>
//         {rawMarkup(selected.title)}
//         {rawMarkup(selected.content)}
//         </>
//     )
// }

const TextView = () => {

    const { selected } = useContext(NotesContext);

    return (
        <>
        <div className="content">
            <div dangerouslySetInnerHTML={rawMarkup(selected.title)}></div>
            <div dangerouslySetInnerHTML={rawMarkup(selected.content)}></div>
        </div>
        </>
    )
}

export default function Editor() {
    const { selected } = useContext(NotesContext);

    return (
        <div key={`note-${selected.id}`}>
            <TextView />
        </div>
    )
};

