import { BaseEditor, Editor } from "slate";

import { MarkTypes } from "../types";
import { isMarkActive } from "./isMarkActive";

const toggleMark = (editor: BaseEditor, mark: MarkTypes): void => {
    const isActive = isMarkActive(editor, mark);

    if (isActive) {
        Editor.removeMark(editor, mark);
    } else {
        Editor.addMark(editor, mark, true);
    }
};

export { toggleMark };
