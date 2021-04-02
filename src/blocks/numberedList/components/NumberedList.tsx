import React from "react";
import { RenderElementProps } from "slate-react";

const NumberedList: React.FC<RenderElementProps> = (props) => (
    <ol {...props.attributes}>{props.children}</ol>
);

export { NumberedList };
