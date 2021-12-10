import React from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { combineFullName } from "utils";

import Post from "templates/Post";

import s from "./Posts.module.scss";

const TIMEOUT = 300;
const CLASSNAMES = {
    enter: s.posts_state_enter,
    enterActive: s.posts_state_enter_active,
    exit: s.posts_state_exit,
    exitActive: s.posts_state_exit_active
};

const getTitle = (author, rewardedBy, profileId) => {
    const a = author.id === profileId ? "You" : combineFullName(author);
    const b = combineFullName(rewardedBy);

    return `${a} rewarded by ${b}`
};

const Posts = ({ data, profileId }) => (
    <TransitionGroup className={s.posts}>
        {data.map(({ id, author, rewardedBy, image, timestamp, content }) => (
            <CSSTransition
                key={id}
                timeout={TIMEOUT}
                classNames={CLASSNAMES}
            >
                <Post
                    key={id}
                    title={getTitle(author, rewardedBy, profileId)}
                    imageURL={image}
                    timestamp={timestamp}
                    content={content}
                />
            </CSSTransition>
        ))}
    </TransitionGroup>
);

export default Posts;
