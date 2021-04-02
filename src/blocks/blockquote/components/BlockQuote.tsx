import React from "react";
import { RenderElementProps } from "slate-react";

const BlockQuote: React.FC<RenderElementProps> = (props) => (
    <blockquote {...props.attributes}>{props.children}</blockquote>
);

export { BlockQuote };
