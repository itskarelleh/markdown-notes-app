import React, { useEffect, useState } from "react";

const EditorContext = React.createContext({});

function EditorProvider({ children }) {
  const [isTextView, setIsTextView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isDemoMode, setIsDemoMode] = useState(false);

  useEffect(() => {
    setIsEditing(true);
  });

  function toggleEditing() {
    setIsEditing((prev) => !prev);
  }

  function toggleMobile() {
    setIsMobile((prev) => !prev);
  }

  function toggleTextView() {
    setIsTextView((prev) => !prev);
  }

  return (
    <EditorContext.Provider
      value={{
        isTextView,
        isMobile,
        isEditing,
        isDemoMode,
        setIsDemoMode,
        setIsEditing,
        toggleTextView,
        toggleMobile,
        toggleEditing,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
}

export { EditorContext, EditorProvider };
