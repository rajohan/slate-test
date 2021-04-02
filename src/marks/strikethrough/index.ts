import { BiStrikethrough } from "react-icons/bi";
import { BaseEditor } from "slate";

import { Mark } from "../types";
import { toggleMark } from "../utils";
import { StrikethroughMark } from "./components/StrikethroughMark";

const type = "strikethrough";

export const strikethrough: Mark<typeof type> = {
    component: StrikethroughMark,
    icon: BiStrikethrough,
    type,
    hotkey: "mod+shift+s",
    action: (editor: BaseEditor) => toggleMark(editor, type),
};
