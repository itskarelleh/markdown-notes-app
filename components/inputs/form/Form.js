import React from "react";
const Yup = require("yup");

export default function Form({ children, ...props }) {
  

  return (
    <form className={`${props.classname} mx-auto`} {...props}>
      {children}
    </form>
  );
}
