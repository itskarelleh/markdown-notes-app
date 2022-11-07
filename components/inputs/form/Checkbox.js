import React from 'react';
import Input from './Input';

export default function Checkbox({ helper, ...props }) {

    return (
        <>
            <input className="mr-3" type="checkbox" {...props} /> {helper}
        </>
)
}