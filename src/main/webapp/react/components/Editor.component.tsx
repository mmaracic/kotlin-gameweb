import { useEffect, useRef, useState } from "react";
import { Props } from "../utils/Props.interface";
import { useCodeMirror, ViewUpdate } from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { MarkdownViewer } from "./MarkdownViever.component";


export function Editor(props: Props) {

  const [markdownValue, setMarkdownValue] = useState("")

  const onChange = (value: string, viewUpdate: ViewUpdate) => {
    setMarkdownValue(value)
  }

  const editor = useRef<HTMLDivElement>(null);
  const { setContainer } = useCodeMirror({
    container: editor.current,
    onChange: onChange,
    extensions: [markdown({ base: markdownLanguage, codeLanguages: languages })],
    value: markdownValue
  });

  useEffect(() => {
    if (editor.current) {
      setContainer(editor.current);
    }
  }, [editor.current]);

  return (
    <div>
      <div ref={editor} />
      <MarkdownViewer markdownValue={markdownValue}/>
    </div>
  );
}
