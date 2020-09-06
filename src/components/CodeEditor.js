import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-dracula";
import html2canvas from "html2canvas";

const TestButton = () => {
  html2canvas(document.querySelector("#capture")).then((canvas) => {
    window.open(canvas.toDataURL("image/png"));
  });
};

const CodeEditor = () => {
  return (
    <div className="md:flex md:flex-1 p-4 h-full mt-12 md:items-center md:flex-col">
      <div id="capture">
        <AceEditor
          mode="java"
          theme="monokai"
          className="w-full h-full code-shadow"
          showGutter={false}
        />
      </div>

      <div className="mt-12">
        <button onClick={TestButton}>Export</button>
      </div>
    </div>
  );
};

export default CodeEditor;
