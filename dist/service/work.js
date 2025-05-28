const workBaseEndpoint = "works";
export function createWorkService(client) {
    return {
        getWorks(params = {}) {
            return client.get(workBaseEndpoint, params);
        },
        getWorkById(id) {
            return client.get(`${workBaseEndpoint}/${encodeURIComponent(id)}`);
        },
        searchWorksByTitle(title) {
            return client.get(workBaseEndpoint, { search: title });
        },
    };
}
