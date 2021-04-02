import { BiCode } from "react-icons/bi";
import { BaseEditor } from "slate";

import { Mark } from "../types";
import { toggleMark } from "../utils";
import { CodeMark } from "./components/CodeMark";

const type = "code";

export const code: Mark<typeof type> = {
    component: CodeMark,
    icon: BiCode,
    type,
    action: (editor: BaseEditor) => toggleMark(editor, type),
};
