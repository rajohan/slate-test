import React, { ReactNode } from "react";

type Props = {
    active: boolean;
    onMouseDown: (event: React.MouseEvent) => void;
    children: ReactNode;
};

const Button: React.FC<Props> = ({ active, onMouseDown, children, ...rest }) => {
    console.log(active);

    return (
        <button onMouseDown={onMouseDown} {...rest}>
            {children}
        </button>
    );
};

export { Button };
