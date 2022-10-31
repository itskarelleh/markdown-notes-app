import React from "react";
import { useContext } from "react";
import Navigation from "@/components/nav/Navigation";
import Editor from "@/components/editor";
import { NotesProvider } from "@/context/NotesProvider";
import { EditorProvider } from "@/context/EditorProvider";
import BaseLayout from "../components/BaseLayout";
import { UserProvider } from "../context/UserProvider";

export default function Index() {
  return (
    <BaseLayout>
      <h1>The Home page</h1>
    </BaseLayout>
  );
}
