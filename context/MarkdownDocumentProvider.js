import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const MarkdownDocumentContext = React.createContext();

function MarkdownDocumentProvider({ children }) {
  const [documents, setDocuments] = useState([]);

  // useEffect(() => {
  //     // setDocuments()
  // }, []);

  return (
    <MarkdownDocumentContext.Provider value={{}}>
      {children}
    </MarkdownDocumentContext.Provider>
  );
}
