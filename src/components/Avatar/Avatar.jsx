import React from 'react';

import DEFAULT_IMAGE from "./image.png";

import s from "./Avatar.module.scss";
import cn from "classnames";

const Avatar = ({ src, alt, size }) => {
    return (
        <div className={cn(s.avatar, s[`avatar_size_${size}`])}>
            <img
                src={src}
                alt={alt}
                className={s.avatar__image}
            />
        </div>
    );
};
Avatar.defaultProps = {
    src: DEFAULT_IMAGE,
    alt: "",
    size: "m"
};

export default Avatar;