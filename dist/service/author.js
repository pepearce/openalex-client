const authorBaseEndpoint = "/authors";
export function createAuthorService(httpClient) {
    return {
        async getAuthors(params = {}) {
            return httpClient.get(authorBaseEndpoint, params);
        },
    };
}
