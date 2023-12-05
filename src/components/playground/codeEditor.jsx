// CodeEditor.js
import React, { useEffect, useRef } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/neat.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';
import CodeMirror from 'codemirror';

const CodeEditor = ({ code, setCode,theme,height }) => {
  const codeMirrorRef = useRef(null);
  const editorRef = useRef(null);

  useEffect(() => {
    const editor = CodeMirror.fromTextArea(codeMirrorRef.current, {
      mode: 'javascript',
      theme: theme,
      lineNumbers: true,
    });

    editor.on('change', (instance) => {
      setCode(instance.getValue());
    });

    // Save CodeMirror instance to ref
    editorRef.current = editor;

    // Set the initial code
    editor.setValue(code);

    // Set focus and cursor position to the end
    editor.setCursor(editor.lineCount(), 0);
    editor.setSize('100%', height);
    // Cleanup CodeMirror instance on component unmount
    return () => {
      editor.toTextArea();
    };
  }, [code, setCode]);

  useEffect(() => {
    // Set focus and cursor position to the end whenever the code prop changes
    if (editorRef.current) {
      editorRef.current.focus();
      editorRef.current.setCursor(editorRef.current.lineCount(), 0);
    }
  }, [code]);

  return <textarea ref={codeMirrorRef} />;
};

export default CodeEditor;





