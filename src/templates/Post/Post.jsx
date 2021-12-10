import React from 'react';
import moment from "moment";

import Avatar from "components/Avatar";

import s from "./Post.module.scss"

const getDate = (timestamp) => {
    const date = moment(timestamp);

    return moment().diff(date, 'hours') > 12
        ? date.format('LLL')
        : date.fromNow();
};

const Post = ({ imageURL, title, timestamp, content }) => {
    const date = React.useMemo(() => getDate(timestamp), [timestamp]);

    return (
        <div className={s.post}>
            <div className={s.post__left}>
                <Avatar
                    size="s"
                    src={imageURL}
                />
            </div>
            <div className={s.post__right}>
                <div className={s.post__title}>
                    {title}
                </div>
                <p className={s.post__subtitle}>
                    {date}
                </p>
                <p className={s.post__content}>
                    {content}
                </p>
            </div>
        </div>
    );
};

export default Post;