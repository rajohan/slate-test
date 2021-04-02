import React from "react";
import { RenderElementProps } from "slate-react";

const CodeBlock: React.FC<RenderElementProps> = (props) => (
    <pre {...props.attributes}>
        <code>{props.children}</code>
    </pre>
);

export { CodeBlock };
