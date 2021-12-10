import React from 'react';

import s from "./ButtonIcon.module.scss";
import cn from "classnames";

const ButtonIcon = ({ className, children = "+",...rest }) => {
    return (
        <button
            className={cn(s.btn_icon, className)}
            {...rest}
        >
            {children}
        </button>
    );
};

export default ButtonIcon;
