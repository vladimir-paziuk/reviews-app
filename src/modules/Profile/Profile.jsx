import React, { useEffect } from 'react';

import { combineFullName } from "utils";
import Avatar from "components/Avatar";

import useProfile from "modules/Profile/store/useProfile";

import s from "./Profile.module.scss";

const Profile = () => {
    const { data, fetch } = useProfile();

    useEffect(() => {
        fetch();
    }, [fetch]);

    return (
        <div className={s.profile}>
            <div className={s.profile__main}>
                <Avatar src={data.image} />
                <div className={s.profile__main__title}>
                    {data.firstName && combineFullName(data)}
                </div>
            </div>
            <div className={s.profile__info}>
                <div className={s.profile__info__title}>
                    My Rewards
                </div>
                <div className={s.profile__info__content}>
                    {data.rewards && "$" + data.rewards}
                </div>
            </div>
            <div className={s.profile__info}>
                <div className={s.profile__info__title}>
                    Give
                </div>
                <div className={s.profile__info__content}>
                    {data.amount && "$" + data.amount}
                </div>
            </div>
        </div>
    );
};

export default Profile;
