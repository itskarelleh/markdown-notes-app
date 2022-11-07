import React from "react";
import { useContext } from "react";
import { PostsContext } from "../../context/PostsProvider";
import { NoNotesDetected, NotesList } from "../notes";

export default function MainMenu() {
  const { notes } = useContext(PostsContext);

  if (notes.length < 1) {
    return (
      <>
        <NoNotesDetected />
      </>
    );
  }

  return (
    <>
      <NotesList />
    </>
  );
}
