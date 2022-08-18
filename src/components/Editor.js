import { useState } from 'react';

export default function Editor({ isEditing, data }) {

    const [ markdownSelected, setMarkdownSelected ] = useState(false);

    return (
        <summary>
            <div>
                
            </div>
            <div contentEditable>
                {data.content}
            </div>
        </summary>
    )
}