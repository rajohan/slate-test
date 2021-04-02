import { KeyboardEvent } from "react";
import { Descendant } from "slate";

export type CustomText = {
    bold?: boolean;
    italic?: boolean;
    strikethrough?: boolean;
    underline?: boolean;
    code?: boolean;
    text: string;
};

export type ParagraphElement = { type: "paragraph"; children: Descendant[] };
export type BlockQuoteElement = { type: "block-quote"; children: Descendant[] };

export type HeadingOneElement = { type: "heading-one"; children: Descendant[] };
export type HeadingTwoElement = { type: "heading-two"; children: Descendant[] };
export type HeadingThreeElement = { type: "heading-three"; children: Descendant[] };
export type HeadingFourElement = { type: "heading-four"; children: Descendant[] };
export type HeadingFiveElement = { type: "heading-five"; children: Descendant[] };
export type HeadingSixElement = { type: "heading-six"; children: Descendant[] };

export type ListItemElement = { type: "list-item"; children: Descendant[] };
export type BulletedListElement = { type: "bulleted-list"; children: Descendant[] };
export type OrderedListElement = { type: "numbered-list"; children: Descendant[] };
export type CheckListItemElement = {
    type: "check-list-item";
    checked: boolean;
    children: Descendant[];
};

export type TableElement = { type: "table"; children: TableRowElement[] };
export type TableCellElement = { type: "table-cell"; children: CustomText[] };
export type TableRowElement = { type: "table-row"; children: TableCellElement[] };

export type LinkElement = { type: "link"; url: string; children: Descendant[] };
export type VideoElement = { type: "video"; url: string; children: CustomText[] };
export type ImageElement = {
    type: "image";
    url: string;
    children: CustomText[];
};

export type CodeElement = { type: "code-block"; children: Descendant[] };

type CustomElement =
    | ParagraphElement
    | BlockQuoteElement
    | HeadingOneElement
    | HeadingTwoElement
    | HeadingThreeElement
    | HeadingFourElement
    | HeadingFiveElement
    | HeadingSixElement
    | BulletedListElement
    | OrderedListElement
    | CheckListItemElement
    | TableElement
    | TableCellElement
    | TableRowElement
    | ListItemElement
    | LinkElement
    | VideoElement
    | ImageElement
    | CodeElement;

declare module "slate" {
    interface CustomTypes {
        Element: CustomElement;
        Text: CustomText;
    }
}

declare module "is-hotkey" {
    function isHotkey(
        hotkey: string | ReadonlyArray<string>,
        event: KeyboardEvent
    ): boolean;
}
