import React from "react";

export default function NotesSummary({ data, key }) {
  return (
    <article key={key}>
      <section className="bg-zinc-200 w-full h-3/4">
        <p>{data.content}</p>
      </section>
      <section className="w-full h-1/4"></section>
    </article>
  );
}
