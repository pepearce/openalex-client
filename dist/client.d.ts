import { APIResponse, Work, Author } from "./models";
export declare class OpenAlexClient {
    private baseURL;
    private maxRetries;
    private cache;
    private cacheTTL;
    constructor(baseURL?: string, maxRetries?: number);
    private request;
    getWorks(params?: Record<string, string | number>): Promise<APIResponse<Work>>;
    getWorkById(id: string): Promise<Work>;
    searchWorksByTitle(title: string): Promise<APIResponse<Work>>;
    getAuthors(params?: Record<string, string | number>): Promise<APIResponse<Author>>;
    getAuthorById(id: string): Promise<Author>;
    searchAuthorsByName(name: string): Promise<APIResponse<Author>>;
    getTopCitedWorksByConcept(conceptId: string, perPage?: number): Promise<Work[]>;
}
