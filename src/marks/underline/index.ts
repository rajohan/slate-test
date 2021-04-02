import { BiUnderline } from "react-icons/bi";
import { BaseEditor } from "slate";

import { Mark } from "../types";
import { toggleMark } from "../utils";
import { UnderlineMark } from "./components/UnderlineMark";

const type = "underline";

export const underline: Mark<typeof type> = {
    component: UnderlineMark,
    icon: BiUnderline,
    type,
    hotkey: "mod+u",
    action: (editor: BaseEditor) => toggleMark(editor, type),
};
