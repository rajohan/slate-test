import React from "react";
import { BaseEditor } from "slate";
import { useSlate } from "slate-react";

import { Button } from "../components/Button";
import { Icon } from "../components/Icon";
import { MarkTypes } from "./types";
import { isMarkActive } from "./utils";

type Props = {
    type: MarkTypes;
    icon: React.FC;
    onClick: (editor: BaseEditor) => void;
};

const MarkButton: React.FC<Props> = ({ type, icon, onClick }) => {
    const editor = useSlate();

    return (
        <Button
            active={isMarkActive(editor, type)}
            onMouseDown={(event) => {
                event.preventDefault();
                onClick(editor);
            }}
        >
            <Icon>{icon}</Icon>
        </Button>
    );
};

export { MarkButton };
