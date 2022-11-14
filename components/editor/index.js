import React, { useContext } from "react";
import { PostsContext } from "@/context/PostsProvider";
import { EditorContext } from "@/context/EditorProvider";
import MarkdownInput from "./MarkdownInput";
import MarkdownOutput from "./MarkdownOutput";
import EditorToolbar from "./EditorToolbar";
import MainMenu from "./MainMenu";

function Editor({ isDemoMode  }) {
  const { selected } = useContext(PostsContext);
  const { isEditing } = useContext(EditorContext);

  if (!selected || Object.keys(selected).length === 0) {
    return (
      <>
        <MainMenu />
      </>
    );
  }

  return (
    <div
      className={`m-0 p-4`}
      style={{ width: "100%", minHeight: "100%" }}
    >
      <div id="editor-wrapper">
        <div
          className={`box mx-auto mt-3`}
          style={{ width: "100%", height: "95%" }}
        >
          {!isEditing ? (
            <MarkdownInput isDemo={isDemoMode} />
          ) : (
            <MarkdownOutput />
          )}
        </div>
      </div>
    </div>
  );
}

export default Editor;
