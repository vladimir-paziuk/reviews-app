import { configureStore } from '@reduxjs/toolkit';

import { profileSlice } from "modules/Profile";
import { postsSlice } from "modules/Posts";

export default configureStore({
    reducer: {
        profile: profileSlice,
        posts: postsSlice,
    },
});
