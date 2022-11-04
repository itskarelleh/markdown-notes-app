import React from "react";

export default function Form({ children,...props }) {
  return (
    <form className={`${props.classname} mx-auto`} {...props}>
      {children}
    </form>
  );
}
