import React from 'react';

import s from "templates/InputField/InputField.module.scss";

const InputField = ({ htmlFor, label, error, isShowError, children }) => {
    return (
        <div className={s.input_field}>
            <label
                htmlFor={htmlFor}
                className={s.input_field__label}
            >
                {label}
            </label>
            <div className={s.input_field__content}>
                {children}
            </div>
            {isShowError && (
                <div className={s.input_field__danger}>
                    {error}
                </div>
            )}
        </div>
    );
};

export default InputField;
