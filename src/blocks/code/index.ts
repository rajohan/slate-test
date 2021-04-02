import { BiCodeBlock } from "react-icons/bi";
import { BaseEditor } from "slate";

import { Block } from "../types";
import { toggleBlock } from "../utils";
import { CodeBlock } from "./components/CodeBlock";

const type = "code-block";

export const codeBlock: Block<typeof type> = {
    component: CodeBlock,
    icon: BiCodeBlock,
    type,
    hotkey: "mod+c",
    action: (editor: BaseEditor) => toggleBlock(editor, type),
};
