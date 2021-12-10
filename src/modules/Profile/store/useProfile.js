import { useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { profileEntity, fetchProfile } from "modules/Profile/store/profileSlice";

const useProfile = () => {
    const dispatch = useDispatch();

    const data = useSelector(profileEntity);
    const fetch = useCallback(() => dispatch(fetchProfile()), [dispatch]);

    return { data, fetch };
};

export default useProfile;
