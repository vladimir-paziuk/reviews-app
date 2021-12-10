import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import profileAPI from "modules/Profile/services/profileAPI";

export const fetchProfile = createAsyncThunk('profile/fetch', async () => {
    const response = await profileAPI.fetch();
    return response.data
});

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        entity: {},
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProfile.fulfilled, (state, action) => {
            state.entity = action.payload;
        });
    },
});

export const profileEntity = state => state.profile.entity;

export default profileSlice.reducer;
