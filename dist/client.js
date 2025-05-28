const BASE_URL = "https://api.openalex.org";
export class OpenAlexClient {
    constructor(baseURL = BASE_URL, maxRetries = 3) {
        this.baseURL = baseURL;
        this.maxRetries = maxRetries;
        this.cache = new Map();
        this.cacheTTL = 60 * 1000; // 1 minute
    }
    async request(endpoint, params = {}) {
        const url = new URL(`${this.baseURL}/${endpoint}`);
        Object.entries(params).forEach(([key, value]) => {
            url.searchParams.append(key, value.toString());
        });
        const cacheKey = url.toString();
        const cached = this.cache.get(cacheKey);
        if (cached && Date.now() - cached.timestamp < this.cacheTTL) {
            return cached.data;
        }
        for (let attempt = 1; attempt <= this.maxRetries; attempt++) {
            const res = await fetch(cacheKey);
            if (res.ok) {
                const data = (await res.json());
                this.cache.set(cacheKey, { timestamp: Date.now(), data });
                return data;
            }
            if (attempt === this.maxRetries) {
                throw new Error(`OpenAlex API request failed after ${attempt} attempts: ${res.statusText}`);
            }
            await new Promise((r) => setTimeout(r, 300 * attempt)); // exponential backoff
        }
        throw new Error("Unknown request error");
    }
    getWorks(params = {}) {
        return this.request("works", params);
    }
    getWorkById(id) {
        return this.request(`works/${encodeURIComponent(id)}`);
    }
    searchWorksByTitle(title) {
        return this.getWorks({ search: title });
    }
    getAuthors(params = {}) {
        return this.request("authors", params);
    }
    getAuthorById(id) {
        return this.request(`authors/${encodeURIComponent(id)}`);
    }
    searchAuthorsByName(name) {
        return this.getAuthors({ search: name });
    }
    async getTopCitedWorksByConcept(conceptId, perPage = 10) {
        const result = await this.getWorks({
            filter: `concepts.id:${conceptId}`,
            sort: "cited_by_count:desc",
            per_page: perPage,
        });
        return result.results;
    }
}
