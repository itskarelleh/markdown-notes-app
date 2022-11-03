import React from "react";

export default function Form({ children, ...props }) {
  return (
    <form
      {...props}
      className={`form ${props.formWidthClassname} mt-6 mx-auto`}
    >
      {children}
    </form>
  );
}
