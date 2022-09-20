import React, { useEffect, useContext } from 'react';
import { NotesContext } from '../../context';

const NotesRow = ({ data }) => {
    
    return (
        <tr key={data.id}>
           {Object.values(data).map((d) => (
            <td>{d}</td>
           ))}
        </tr>
    )
}

export default function NotesTable() {
    
    const { notes } = useContext(NotesContext);
    
    return (
       <>
        {notes && notes.map((note) => (
            <NotesRow data={note} />
        ))}
       </>
    )
}