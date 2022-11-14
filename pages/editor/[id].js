import React from "react";
import { useRouter } from "next/router";
import Editor from "@/components/editor";
import Main from "@/components/Main";
import { EditorProvider } from "@/context/EditorProvider";
import EditorToolbar from "@/components/editor/EditorToolbar";
export default function EditorPage() {
  
  const router = useRouter();
  
  const { id } = router.query;

  return (
    <EditorProvider>
      <Main padding="p-0">
        <div className="w-full">
          <EditorToolbar />
          <Editor />
        </div>
      </Main>
    </EditorProvider>
  );
}
