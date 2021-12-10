import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import postsAPI from "modules/Posts/services/postsAPI";

export const fetchFeeds = createAsyncThunk('posts/fetch feeds', async () => {
    const response = await postsAPI.fetchFeeds();
    return response.data
});

export const fetchRewards = createAsyncThunk('posts/fetch rewards', async () => {
    const response = await postsAPI.fetchRewards();
    return response.data
});

export const postReward = createAsyncThunk('posts/post reward', async (data) => {
    const response = await postsAPI.postReward(data);
    return response.data
});

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        feeds: [],
        rewards: [],
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFeeds.fulfilled, (state, action) => {
            state.feeds = action.payload;
        });
        builder.addCase(fetchRewards.fulfilled, (state, action) => {
            state.rewards = action.payload;
        });
        builder.addCase(postReward.fulfilled, (state, action) => {
            state.feeds.push(action.payload);
        });
    },
});

export const feedsEntities = state => state.posts.feeds;
export const rewardsEntities = state => state.posts.rewards;

export default postsSlice.reducer;
