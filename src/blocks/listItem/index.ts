import React from "react";

import { Block } from "../types";
import { ListItem } from "./components/ListItem";

const type = "list-item";

export const listItem: Block<typeof type> = {
    component: ListItem,
    icon: React.Fragment,
    type,
    action: () => ({}),
};
