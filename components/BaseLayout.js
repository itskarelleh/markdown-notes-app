import React, { useContext } from "react";

export default function BaseLayout({ children, ...props }) {
  return (
    <div
      {...props}
      className={`App bg-zinc-300 dark:bg-zinc-900 relative z-100 p-0 mx-0 is-fullhd is-widescreen is-fluid`}
    >
      {children}
    </div>
  );
}
