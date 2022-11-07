import React, { useState, useContext, useEffect } from "react";
import { PostsContext } from "../../context/PostsProvider";
import { rawMarkup } from "../../utils";

export default function MarkdownOutput() {
  const { selected } = useContext(PostsContext);
  const [markup, setMarkup] = useState("");

  useEffect(() => {
    setMarkup(rawMarkup(selected.content));
  }, [selected.content]);

  return (
    <>
      <div className="content-spacing">
        <header className={theme.text.classStyle}>{selected.title}</header>
        {selected.updated_at && (
          <div className={theme.text.classStyle}>{selected.updated_at}</div>
        )}
        <div
          className={`${theme.text.classStyle} content-body`}
          dangerouslySetInnerHTML={{ __html: markup }}
        ></div>
      </div>
    </>
  );
}
