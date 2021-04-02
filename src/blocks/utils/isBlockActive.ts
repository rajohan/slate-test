import { BaseEditor, Editor, Element } from "slate";

import { BlockTypes } from "../types";

const isBlockActive = (editor: BaseEditor, type: BlockTypes): boolean => {
    const [match] = Editor.nodes(editor, {
        match: (n) => Element.isElement(n) && n.type === type,
    });

    return !!match;
};

export { isBlockActive };
