import React, { useEffect, useRef } from "react";
import CodeMirror from "codemirror";
import styled from "styled-components";
import { rawSchema } from "./rawSchema";

const SchemaContainer = styled.div`
  flex: 1 0 0;
  overflow: hidden;
  height: 100%;

  > .CodeMirror {
    height: calc(100% - 50px);
  }
`;

const TextareaHeader = styled.div`
  font-weight: bold;
  padding: 16px;
  height: 50px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: auto;
`;

type SchemaAreaProps = {
  onChangeSchema: (str: string) => void;
};

const SchemaArea = ({ onChangeSchema }: SchemaAreaProps) => {
  const ref = useRef<HTMLTextAreaElement | null>(null);
  const onSchemaChangeRef = useRef(onChangeSchema);
  onSchemaChangeRef.current = onChangeSchema;

  useEffect(() => {
    if (ref.current) {
      const editor = CodeMirror.fromTextArea(ref.current, {
        mode: "graphql",
        lineNumbers: true,
      });
      editor.on("change", (editor) => {
        onSchemaChangeRef.current(editor.getValue());
      });
    }
  }, []);

  return (
    <SchemaContainer>
      <TextareaHeader>Schema</TextareaHeader>
      <Textarea ref={ref} defaultValue={rawSchema.replace(`\n`, ``)} />
    </SchemaContainer>
  );
};

export default SchemaArea;
