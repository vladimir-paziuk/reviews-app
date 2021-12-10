import React from 'react';

import cx from "classnames";
import s from "./Container.module.scss";

const Container = ({ children, className }) => {
    return (
        <div className={cx(s.container, className)}>
            {children}
        </div>
    );
};

export default Container;