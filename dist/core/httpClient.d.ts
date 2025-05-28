export declare class HttpClient {
    private baseUrl;
    private maxRetries;
    private ttl;
    constructor(baseUrl: string, maxRetries?: number, ttl?: number);
    private cache;
    get<T>(endpoint: string, params?: Record<string, string | number>): Promise<T>;
}
