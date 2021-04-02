import React from "react";
import { BaseEditor } from "slate";

import { bold } from "./bold";
import { code } from "./code";
import { italic } from "./italic";
import { strikethrough } from "./strikethrough";
import { underline } from "./underline";

export interface Mark<T extends string> {
    component: React.FC;
    icon: React.FC;
    type: T;
    hotkey?: string;
    action: (editor: BaseEditor) => void;
}

export type MarkTypes =
    | typeof bold.type
    | typeof italic.type
    | typeof strikethrough.type
    | typeof underline.type
    | typeof code.type;
