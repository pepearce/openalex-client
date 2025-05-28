export class HttpClient {
  constructor(
    private baseUrl: string,
    private maxRetries = 3,
    private ttl = 60_000,
  ) { }

  private cache = new Map<string, { data: unknown; timestamp: number }>();

  async get<T>(
    endpoint: string,
    params: Record<string, string | number> = {},
  ): Promise<T> {
    const url = new URL(`${this.baseUrl}/${endpoint}`);
    Object.entries(params).forEach(([k, v]) =>
      url.searchParams.append(k, v.toString()),
    );
    const key = url.toString();

    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.timestamp < this.ttl)
      return cached.data as T;

    for (let i = 0; i < this.maxRetries; i++) {
      const res = await fetch(key);
      if (res.ok) {
        const json = (await res.json()) as T;
        this.cache.set(key, { data: json, timestamp: Date.now() });
        return json;
      }
      await new Promise((r) => setTimeout(r, 300 * (i + 1)));
    }

    throw new Error(`Failed to fetch: ${key}`);
  }
}
