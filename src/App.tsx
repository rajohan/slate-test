import isHotkey from "is-hotkey";
import React, { useCallback, useMemo, useState } from "react";
import { createEditor, Descendant, Element } from "slate";
import { withHistory } from "slate-history";
import { Editable, RenderLeafProps, Slate, withReact } from "slate-react";

import {
    BlockButton,
    blockQuote,
    bulletedList,
    codeBlock,
    headingFive,
    headingFour,
    headingOne,
    headingSix,
    headingThree,
    headingTwo,
    listItem,
    numberedList,
} from "./blocks";
import { bold, code, italic, MarkButton, strikethrough, underline } from "./marks";

const initialValue: Element[] = [
    {
        type: "paragraph",
        children: [{ text: "This is editable plain text, just like a <textarea>!" }],
    },
];

const marks = [bold, italic, strikethrough, underline, code];
const blocks = [
    blockQuote,
    codeBlock,
    headingOne,
    headingTwo,
    headingThree,
    headingFour,
    headingFive,
    headingSix,
    bulletedList,
    numberedList,
    listItem,
];

const App: React.FC = () => {
    const editor = useMemo(() => withReact(withHistory(createEditor())), []);
    const [value, setValue] = useState<Descendant[]>(initialValue);

    const renderElement = useCallback((props) => {
        for (const block of blocks) {
            if (block.type === props.element.type) {
                return <block.component {...props} />;
            }
        }

        return <p {...props.attributes}>{props.children}</p>;
    }, []);

    const renderLeaf = useCallback(({ attributes, children, leaf }: RenderLeafProps) => {
        for (const mark of marks) {
            if (leaf[mark.type]) {
                children = <mark.component>{children}</mark.component>;
            }
        }

        return <span {...attributes}>{children}</span>;
    }, []);

    return (
        <Slate editor={editor} value={value} onChange={(value) => setValue(value)}>
            <div>
                <MarkButton type={bold.type} icon={bold.icon} onClick={bold.action} />
                <MarkButton
                    type={italic.type}
                    icon={italic.icon}
                    onClick={italic.action}
                />
                <MarkButton
                    type={underline.type}
                    icon={underline.icon}
                    onClick={underline.action}
                />
                <MarkButton
                    type={strikethrough.type}
                    icon={strikethrough.icon}
                    onClick={strikethrough.action}
                />
                <MarkButton type={code.type} icon={code.icon} onClick={code.action} />
                <BlockButton
                    type={codeBlock.type}
                    icon={codeBlock.icon}
                    onClick={codeBlock.action}
                />
                <BlockButton
                    type={blockQuote.type}
                    icon={blockQuote.icon}
                    onClick={blockQuote.action}
                />
                <BlockButton
                    type={bulletedList.type}
                    icon={bulletedList.icon}
                    onClick={bulletedList.action}
                />
                <BlockButton
                    type={numberedList.type}
                    icon={numberedList.icon}
                    onClick={numberedList.action}
                />
                <BlockButton
                    type={headingOne.type}
                    icon={headingOne.icon}
                    onClick={headingOne.action}
                />
                <BlockButton
                    type={headingTwo.type}
                    icon={headingTwo.icon}
                    onClick={headingTwo.action}
                />
                <BlockButton
                    type={headingThree.type}
                    icon={headingThree.icon}
                    onClick={headingThree.action}
                />
                <BlockButton
                    type={headingFour.type}
                    icon={headingFour.icon}
                    onClick={headingFour.action}
                />
                <BlockButton
                    type={headingFive.type}
                    icon={headingFive.icon}
                    onClick={headingFive.action}
                />
                <BlockButton
                    type={headingSix.type}
                    icon={headingSix.icon}
                    onClick={headingSix.action}
                />
            </div>
            <Editable
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                placeholder="Enter some text..."
                onKeyDown={(event) => {
                    for (const mark of marks) {
                        if (mark.hotkey && isHotkey(mark.hotkey, event)) {
                            event.preventDefault();
                            mark.action(editor);
                        }
                    }

                    for (const block of blocks) {
                        if (block.hotkey && isHotkey(block.hotkey, event)) {
                            event.preventDefault();
                            block.action(editor);
                        }
                    }
                }}
            />
        </Slate>
    );
};

export default App;
