import React from 'react';

import { TabNav } from "components/Tabs";

import s from "./NavItem.module.scss";
import cn from "classnames";

const NavItem = ({ id, children }) => (
    <TabNav id={id}>
        {({ isActive, setActive }) => (
            <li
                className={cn(
                    s.nav__item,
                    {
                        [s.nav__item_active]: isActive
                    }
                )}
                onClick={() => setActive(id)}
            >
                {children}
            </li>
        )}
    </TabNav>
);

export default NavItem;