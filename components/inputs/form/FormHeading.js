import React from 'react';
import InputField from './InputField';

export default function FormHeading({ title, subtitle }) {

    return (
        <>
            <InputField justifyContent="justify-center">
                <h1 className="text-2xl text-center">{title}</h1>
                {subtitle && <h2 className="text-xl">{subtitle}</h2>}
            </InputField>   
        </>
    )
}