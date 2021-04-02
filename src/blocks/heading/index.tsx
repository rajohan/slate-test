import { BaseEditor } from "slate";

import { Block } from "../types";
import { toggleBlock } from "../utils";
import { Heading } from "./components/Heading";

const typeOne = "heading-one";
const typeTwo = "heading-two";
const typeThree = "heading-three";
const typeFour = "heading-four";
const typeFive = "heading-five";
const typeSix = "heading-six";

const headerIcon = (text: string) => <span>{text}</span>;

export const headingOne: Block<typeof typeOne> = {
    component: Heading,
    icon: () => headerIcon("h1"),
    type: typeOne,
    action: (editor: BaseEditor) => toggleBlock(editor, typeOne),
};

export const headingTwo: Block<typeof typeTwo> = {
    component: Heading,
    icon: () => headerIcon("h2"),
    type: typeTwo,
    action: (editor: BaseEditor) => toggleBlock(editor, typeTwo),
};

export const headingThree: Block<typeof typeThree> = {
    component: Heading,
    icon: () => headerIcon("h3"),
    type: typeThree,
    action: (editor: BaseEditor) => toggleBlock(editor, typeThree),
};

export const headingFour: Block<typeof typeFour> = {
    component: Heading,
    icon: () => headerIcon("h4"),
    type: typeFour,
    action: (editor: BaseEditor) => toggleBlock(editor, typeFour),
};

export const headingFive: Block<typeof typeFive> = {
    component: Heading,
    icon: () => headerIcon("h5"),
    type: typeFive,
    action: (editor: BaseEditor) => toggleBlock(editor, typeFive),
};

export const headingSix: Block<typeof typeSix> = {
    component: Heading,
    icon: () => headerIcon("h6"),
    type: typeSix,
    action: (editor: BaseEditor) => toggleBlock(editor, typeSix),
};
