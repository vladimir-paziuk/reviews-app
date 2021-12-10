import { useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { feedsEntities, rewardsEntities, fetchFeeds, fetchRewards, postReward } from "modules/Posts/store/postsSlice";

const usePosts = () => {
    const dispatch = useDispatch();

    const feeds = useSelector(feedsEntities);
    const rewards = useSelector(rewardsEntities);

    const loadFeeds = useCallback(() => dispatch(fetchFeeds()), [dispatch]);
    const loadRewards = useCallback(() => dispatch(fetchRewards()), [dispatch]);
    const addReward = useCallback((data) => dispatch(postReward(data)), [dispatch]);

    return {
        feeds,
        rewards,
        loadFeeds,
        loadRewards,
        addReward,
    };
};

export default usePosts;
