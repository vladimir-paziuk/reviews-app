import React from 'react';

import s from './Input.module.scss';
import cn from 'classnames';

const Input = ({ className, ...rest }) => {
    return (
        <input
            className={cn(s.input, className)}
            {...rest}
        />
    );
};

export const TextArea = ({ className, ...rest }) => {
    return (
        <textarea
            className={cn(s.input, className)}
            {...rest}
        />
    );
};

export default Input;