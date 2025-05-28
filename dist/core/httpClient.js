export class HttpClient {
    constructor(baseUrl, maxRetries = 3, ttl = 60000) {
        this.baseUrl = baseUrl;
        this.maxRetries = maxRetries;
        this.ttl = ttl;
        this.cache = new Map();
    }
    async get(endpoint, params = {}) {
        const url = new URL(`${this.baseUrl}/${endpoint}`);
        Object.entries(params).forEach(([k, v]) => url.searchParams.append(k, v.toString()));
        const key = url.toString();
        const cached = this.cache.get(key);
        if (cached && Date.now() - cached.timestamp < this.ttl)
            return cached.data;
        for (let i = 0; i < this.maxRetries; i++) {
            const res = await fetch(key);
            if (res.ok) {
                const json = (await res.json());
                this.cache.set(key, { data: json, timestamp: Date.now() });
                return json;
            }
            await new Promise((r) => setTimeout(r, 300 * (i + 1)));
        }
        throw new Error(`Failed to fetch: ${key}`);
    }
}
