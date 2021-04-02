import { BaseEditor, Editor } from "slate";

import { MarkTypes } from "../types";

const isMarkActive = (editor: BaseEditor, mark: MarkTypes): boolean => {
    const marks = Editor.marks(editor);
    return marks ? marks[mark] === true : false;
};

export { isMarkActive };
