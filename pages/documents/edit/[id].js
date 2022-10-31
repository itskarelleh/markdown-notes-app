import React, { useContext } from "react";
import { EditorProvider } from '@/components/editor';
import Editor from '@/components/editor';

export default function EditDocument() {
    
    return (
        <EditorProvider>
            <Editor />
        </EditorProvider>
    )
}