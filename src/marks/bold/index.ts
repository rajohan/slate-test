import { BiBold } from "react-icons/bi";
import { BaseEditor } from "slate";

import { Mark } from "../types";
import { toggleMark } from "../utils";
import { BoldMark } from "./components/BoldMark";

const type = "bold";

export const bold: Mark<typeof type> = {
    component: BoldMark,
    icon: BiBold,
    type,
    hotkey: "mod+b",
    action: (editor: BaseEditor) => toggleMark(editor, type),
};
