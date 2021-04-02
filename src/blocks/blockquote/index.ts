import { MdFormatQuote } from "react-icons/md";
import { BaseEditor } from "slate";

import { Block } from "../types";
import { toggleBlock } from "../utils";
import { BlockQuote } from "./components/BlockQuote";

const type = "block-quote";

export const blockQuote: Block<typeof type> = {
    component: BlockQuote,
    icon: MdFormatQuote,
    type,
    action: (editor: BaseEditor) => toggleBlock(editor, type),
};
