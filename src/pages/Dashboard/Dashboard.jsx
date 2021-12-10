import React, {useEffect} from 'react';

import { useModals } from "services/modals";

import { TabSwitcher, TabContent } from 'components/Tabs';
import ButtonIcon from "components/ButtonIcon";

import NavItem from 'templates/NavItem';
import Container from 'templates/Container';
import Reward from "templates/Reward";

import Profile, { useProfile } from 'modules/Profile';
import Posts, { usePosts } from 'modules/Posts';

import s from './Dashboard.module.scss';

const TABS = {
    feed: 'feed',
    myRewards: 'myRewards',
};

const Dashboard = () => {
    const modals = useModals();

    const { data: { id: profileId } } = useProfile();
    const { feeds, rewards, loadFeeds, loadRewards, addReward } = usePosts();

    useEffect(() => {
        loadFeeds();
    }, [loadFeeds]);

    useEffect(() => {
        loadRewards();
    }, [loadRewards]);

    const showModal = () => modals.show((props) => (
        <Reward
            {...props}
            onSubmit={(data) => addReward(data)}
        />
    ));

    return (
        <div className={s.main}>
            <Container>
                <div className={s.main__head}>
                    <Profile />
                </div>
            </Container>
            <TabSwitcher initial={TABS.feed}>
                <Container>
                    <ul className={s.main__nav}>
                        <NavItem id={TABS.feed}>
                            Feed
                        </NavItem>
                        <NavItem id={TABS.myRewards}>
                            My Rewards
                        </NavItem>
                    </ul>
                </Container>
                <div className={s.main__content}>
                    <Container className={s.main__content__inner}>
                        <ButtonIcon
                            className={s.main__content__btn}
                            onClick={showModal}
                        />
                        <TabContent id={TABS.feed}>
                            <Posts data={feeds} />
                        </TabContent>
                        <TabContent id={TABS.myRewards}>
                            <Posts
                                data={rewards}
                                profileId={profileId}
                            />
                        </TabContent>
                    </Container>
                </div>
            </TabSwitcher>
        </div>
    );
};

export default Dashboard;
