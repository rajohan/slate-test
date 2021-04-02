import React from "react";

const UnderlineMark: React.FC = (props) => (
    <span style={{ textDecoration: "underline" }}>{props.children}</span>
);

export { UnderlineMark };
