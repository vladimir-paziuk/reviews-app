import HttpClient, { API } from "services/httpClient";
import { mock_profile } from "__mocks__/mock_posts";

class ProfileAPI extends HttpClient {
    fetch() {
        return this.get(API.profile, { mocks: mock_profile });
    }
}

const profileAPI = new ProfileAPI();
export default profileAPI;
