import React from 'react';

import s from "./Button.module.scss";
import cn from "classnames";

const Button = ({ className, theme, children, ...rest }) => {
    return (
        <button
            className={cn(
                s.button,
                s[`button_${theme}`],
                className
            )}
            {...rest}
        >
            {children}
        </button>
    );
};
Button.defaultProps = {
    theme: "primary"
};

export default Button;