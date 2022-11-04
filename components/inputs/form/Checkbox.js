import React from 'react';
import Input from './Input';

export default function Checkbox({ helper, ...props }) {

    return (
        <>
            <input type="checkbox" {...props} /> {helper}
        </>
)
}