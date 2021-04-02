import { BiItalic } from "react-icons/bi";
import { BaseEditor } from "slate";

import { Mark } from "../types";
import { toggleMark } from "../utils";
import { ItalicMark } from "./components/ItalicMark";

const type = "italic";

export const italic: Mark<typeof type> = {
    component: ItalicMark,
    icon: BiItalic,
    type,
    hotkey: "mod+i",
    action: (editor: BaseEditor) => toggleMark(editor, type),
};
