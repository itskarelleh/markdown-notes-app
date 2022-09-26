import React, { useContext } from 'react';
import { Button } from 'react-bulma-components';
import { EditorContext } from '../../context';
 
const EditNoteButton = () => {
    const { isEditing, toggleEditing } = useContext(EditorContext);
    return (
        <Button size="small" className="is-rounded"
        color={!isEditing ? "warning" : "success"} onClick={toggleEditing}>
            {!isEditing ? <ion-icon name="create-outline"></ion-icon> : <ion-icon name="checkmark-outline"></ion-icon>}
        </Button>
    )
}

export default EditNoteButton;