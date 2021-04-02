import React from "react";
import { BaseEditor } from "slate";
import { useSlate } from "slate-react";

import { Button } from "../components/Button";
import { Icon } from "../components/Icon";
import { BlockTypes } from "./types";
import { isBlockActive } from "./utils";

type Props = {
    type: BlockTypes;
    icon: React.FC;
    onClick: (editor: BaseEditor) => void;
};

const BlockButton: React.FC<Props> = ({ type, icon, onClick }) => {
    const editor = useSlate();

    return (
        <Button
            active={isBlockActive(editor, type)}
            onMouseDown={(event) => {
                event.preventDefault();
                onClick(editor);
            }}
        >
            <Icon>{icon}</Icon>
        </Button>
    );
};

export { BlockButton };
