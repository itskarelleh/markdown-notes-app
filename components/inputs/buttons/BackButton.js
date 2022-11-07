import React, { useContext } from "react";
import { PostsContext } from "@/context/PostsProvider";

export default function BackButton() {
  const { toggle } = useContext();
  const { clearSelected } = useContext(PostsContext);

  return (
    <button
      onClick={clearSelected}
      className={`button is-small is-rounded ${
        toggle
          ? light.panel.classStyle
          : [dark.panel.classStyle, dark.text.classStyle]
      }`}
      title="Back to main menu"
    >
      <ion-icon name="arrow-back-outline"></ion-icon>
    </button>
  );
}
