import React from "react";

type Props = {
    children: React.FC;
};

const Icon: React.FC<Props> = (props) => <span>{<props.children />}</span>;

export { Icon };
