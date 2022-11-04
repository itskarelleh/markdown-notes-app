import React from "react";

export default function FormWrapper({ children, ...props }) {
  return (
    <div
      {...props}
      className="pt-6 flex flex-col justify-center h-screen container"
    >
      {children}
    </div>
  );
}
