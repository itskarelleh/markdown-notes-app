import React from "react";
import { Formik } from "formik";

export default function FormWrapper({ children, ...props }) {
  return (
    <div {...props} className="py-6 flex flex-col justify-center h-3/4 container">
      {children}
    </div>
  );
}
