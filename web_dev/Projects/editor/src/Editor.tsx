import React, { memo, useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import { EDITOR_JS_TOOLS } from './Tool';

const Editor: React.FC = ({ onChange }) => {
  const ref = useRef<EditorJS>();

  //Initialize editorjs
  useEffect(() => {
    //Initialize editorjs if we don't have a reference
    if (!ref.current) {
      const editor = new EditorJS({
        holder: 'editorjs-container',

        tools: EDITOR_JS_TOOLS,
        // data: data,
        async onChange(api, event) {
          const data = await api.saver.save();
          onChange(data);
        },
      });
      ref.current = editor;
    }

    //Add a return function to handle cleanup
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);

  return <div id="editorjs-container" />;
};

export default memo(Editor);
