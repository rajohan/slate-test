import React from "react";
import { RenderElementProps } from "slate-react";

const Heading: React.FC<RenderElementProps> = (props) => {
    let Tag;

    switch (props.element.type) {
        case "heading-one":
            Tag = "h1";
            break;
        case "heading-two":
            Tag = "h2";
            break;
        case "heading-three":
            Tag = "h3";
            break;
        case "heading-four":
            Tag = "h4";
            break;
        case "heading-five":
            Tag = "h5";
            break;
        case "heading-six":
            Tag = "h6";
            break;
        default:
            Tag = "h1";
    }

    return <Tag {...props.attributes}>{props.children}</Tag>;
};

export { Heading };
