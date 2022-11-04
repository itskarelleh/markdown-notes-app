import React, { useContext } from "react";

export default function BaseLayout({ children, ...props }) {
  return (
    <div
      {...props}
      className={`App container p-0 mx-0 is-fullhd is-widescreen is-fluid`}
    >
      {children}
    </div>
  );
}
