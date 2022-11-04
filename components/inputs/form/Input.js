import react from "react";

export default function Input({ ...props }) {
  return (
    <>
      <input {...props} className="p-2 indent-3 w-full" />
    </>
  );
}
