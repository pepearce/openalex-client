import { APIResponse, Work, Author } from "./models";

const BASE_URL = "https://api.openalex.org";

interface CacheEntry<T> {
  timestamp: number;
  data: T;
}

export class OpenAlexClient {
  private cache = new Map<string, CacheEntry<unknown>>();
  private cacheTTL = 60 * 1000; // 1 minute

  constructor(
    private baseURL: string = BASE_URL,
    private maxRetries = 3,
  ) { }

  private async request<T>(
    endpoint: string,
    params: Record<string, string | number> = {},
  ): Promise<T> {
    const url = new URL(`${this.baseURL}/${endpoint}`);
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value.toString());
    });

    const cacheKey = url.toString();
    const cached = this.cache.get(cacheKey) as CacheEntry<T> | undefined;

    if (cached && Date.now() - cached.timestamp < this.cacheTTL) {
      return cached.data;
    }

    for (let attempt = 1; attempt <= this.maxRetries; attempt++) {
      const res = await fetch(cacheKey);
      if (res.ok) {
        const data = (await res.json()) as T;
        this.cache.set(cacheKey, { timestamp: Date.now(), data });
        return data;
      }
      if (attempt === this.maxRetries) {
        throw new Error(
          `OpenAlex API request failed after ${attempt} attempts: ${res.statusText}`,
        );
      }
      await new Promise((r) => setTimeout(r, 300 * attempt)); // exponential backoff
    }

    throw new Error("Unknown request error");
  }

  getWorks(
    params: Record<string, string | number> = {},
  ): Promise<APIResponse<Work>> {
    return this.request("works", params);
  }

  getWorkById(id: string): Promise<Work> {
    return this.request(`works/${encodeURIComponent(id)}`);
  }

  searchWorksByTitle(title: string): Promise<APIResponse<Work>> {
    return this.getWorks({ search: title });
  }

  getAuthors(
    params: Record<string, string | number> = {},
  ): Promise<APIResponse<Author>> {
    return this.request("authors", params);
  }

  getAuthorById(id: string): Promise<Author> {
    return this.request(`authors/${encodeURIComponent(id)}`);
  }

  searchAuthorsByName(name: string): Promise<APIResponse<Author>> {
    return this.getAuthors({ search: name });
  }

  async getTopCitedWorksByConcept(
    conceptId: string,
    perPage = 10,
  ): Promise<Work[]> {
    const result = await this.getWorks({
      filter: `concepts.id:${conceptId}`,
      sort: "cited_by_count:desc",
      per_page: perPage,
    });
    return result.results;
  }
}
