import React from "react";
import { BaseEditor } from "slate";
import { RenderElementProps } from "slate-react";

import { blockQuote } from "./blockquote";
import { bulletedList } from "./bulletedList";
import { codeBlock } from "./code";
import {
    headingFive,
    headingFour,
    headingOne,
    headingSix,
    headingThree,
    headingTwo,
} from "./heading";
import { listItem } from "./listItem";
import { numberedList } from "./numberedList";

export interface Block<T extends string> {
    component: React.FC<RenderElementProps>;
    icon: React.FC;
    type: T;
    hotkey?: string;
    action: (editor: BaseEditor) => void;
}

export type BlockTypes =
    | typeof blockQuote.type
    | typeof codeBlock.type
    | typeof headingOne.type
    | typeof headingTwo.type
    | typeof headingThree.type
    | typeof headingFour.type
    | typeof headingFive.type
    | typeof headingSix.type
    | typeof bulletedList.type
    | typeof numberedList.type
    | typeof listItem.type;
