import { BiListOl } from "react-icons/bi";
import { BaseEditor } from "slate";

import { Block } from "../types";
import { toggleBlock } from "../utils";
import { NumberedList } from "./components/NumberedList";

const type = "numbered-list";

export const numberedList: Block<typeof type> = {
    component: NumberedList,
    icon: BiListOl,
    type,
    action: (editor: BaseEditor) => toggleBlock(editor, type),
};
