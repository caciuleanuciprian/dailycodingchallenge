"use client";

import EditorContainer from "./components/editor/editorContainer";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Navbar active={0} />
      <EditorContainer />
    </>
  );
}
