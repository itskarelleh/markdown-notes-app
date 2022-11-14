import React from 'react';

export default function StickyNoteSummary({ data, classname }) {

    return (
        <div className={`bg-zinc-200 dark:bg-zinc-600 w-full md:w-1/2 ${classname}`}>
            {data}
        </div>
    )
}