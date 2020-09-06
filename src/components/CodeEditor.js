import React from "react";
import AceEditor from "react-ace";

const CodeEditor = () => {
  return (
    <div className="md:flex md:flex-1 h-full mt-12 md:items-center">
      <AceEditor />
    </div>
  );
};

export default CodeEditor;
