import React from "react";
import { RenderElementProps } from "slate-react";

const ListItem: React.FC<RenderElementProps> = (props) => (
    <li {...props.attributes}>{props.children}</li>
);

export { ListItem };
