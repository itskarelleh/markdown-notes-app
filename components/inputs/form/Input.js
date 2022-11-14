import react from "react";

export default function Input({ errors, touched, ...props }) {
  return (
    <>
      <input {...props}
        className={`bg-transparent dark:bg-transparent p-2 indent-3 w-full border-b-2 border-solid border-b-zinc-700/50 dark:border-b-zinc-100 ${errors && touched ? `border-b-red-100` : ``}`} />
    </>
  );
}
