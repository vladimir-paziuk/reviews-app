class HttpClient {
    createRequest(data) {
        return new Promise(((resolve) => {
            setTimeout(() => {
                resolve({ data });
            }, 400);
        }));
    }
    get(url, config) {
        return this.createRequest(config.mocks);
    }
    post(url, config) {
        return this.createRequest(config.mocks);
    }
    patch(url, config) {
        return this.createRequest(config.mocks);
    }
    put(url, config) {
        return this.createRequest(config.mocks);
    }
    delete(url, config) {
        return this.createRequest(config.mocks);
    }
}

export default HttpClient;
