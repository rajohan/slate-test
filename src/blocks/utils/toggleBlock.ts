import { BaseEditor, Editor, Element, Transforms } from "slate";

import { BlockTypes } from "../types";
import { isBlockActive } from "./isBlockActive";

const listTypes = new Set(["numbered-list", "bulleted-list"]);

const toggleBlock = (editor: BaseEditor, type: BlockTypes): void => {
    const isActive = isBlockActive(editor, type);
    const isList = listTypes.has(type);

    Transforms.unwrapNodes(editor, {
        match: (n) => {
            if (!Editor.isEditor(n) && Element.isElement(n)) {
                return listTypes.has(n.type);
            }

            return false;
        },
        split: true,
    });

    Transforms.setNodes(editor, {
        type: isActive ? "paragraph" : isList ? "list-item" : type,
    });

    if (!isActive && isList) {
        Transforms.wrapNodes(editor, { type, children: [] });
    }
};

export { toggleBlock };
