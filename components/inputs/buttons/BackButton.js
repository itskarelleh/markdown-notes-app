import React, { useContext } from "react";
import { PostsContext } from "@/context/PostsProvider";

export default function BackButton() {
  const { clearSelected } = useContext(PostsContext);

  return (
    <button
      onClick={clearSelected}
      className="ml-3"
      title="Back to Documents"
    >
      <ion-icon name="arrow-back-outline"></ion-icon> Back to Documents
    </button>
  );
}
