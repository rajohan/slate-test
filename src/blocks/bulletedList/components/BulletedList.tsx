import React from "react";
import { RenderElementProps } from "slate-react";

const BulletedList: React.FC<RenderElementProps> = (props) => (
    <ul {...props.attributes}>{props.children}</ul>
);

export { BulletedList };
