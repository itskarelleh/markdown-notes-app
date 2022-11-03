import React, { useContext } from "react";
import { ThemeContext, light, dark } from "@/context/ThemeProvider";

export default function BaseLayout({ children, ...props }) {
  const { toggle } = useContext(ThemeContext);

  return (
    <div
      {...props}
      className={`App container p-0 mx-0 is-fullhd is-widescreen is-fluid ${
        !toggle ? light.background.classStyle : dark.background.classStyle
      }`}
    >
      {children}
    </div>
  );
}
