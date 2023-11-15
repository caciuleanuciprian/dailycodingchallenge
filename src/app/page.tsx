"use client";

import EditorContainer from "./components/editor/editorContainer";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Navbar active={0} />
      <div className="py-6 mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
        <p>Some text should go in here...</p>
      </div>
      <EditorContainer />
    </>
  );
}
