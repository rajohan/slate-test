import { BiListUl } from "react-icons/bi";
import { BaseEditor } from "slate";

import { Block } from "../types";
import { toggleBlock } from "../utils";
import { BulletedList } from "./components/BulletedList";

const type = "bulleted-list";

export const bulletedList: Block<typeof type> = {
    component: BulletedList,
    icon: BiListUl,
    type,
    action: (editor: BaseEditor) => toggleBlock(editor, type),
};
