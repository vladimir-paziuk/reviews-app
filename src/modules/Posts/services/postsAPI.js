import HttpClient, { API } from "services/httpClient";

import { getReward, mock_feeds, mock_my_rewards } from "__mocks__/mock_posts";

class PostsAPI extends HttpClient {
    fetchFeeds() {
        return this.get(API.feeds, { mocks: mock_feeds });
    }

    fetchRewards() {
        return this.get(API.rewards, { mocks: mock_my_rewards });
    }

    postReward(data) {
        return this.post(API.rewards, { mocks: getReward(data) });
    }
}

const postsAPI = new PostsAPI();
export default postsAPI;
