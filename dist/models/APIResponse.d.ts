export interface APIResponse<T> {
    meta: {
        count: number;
        page: number;
        per_page: number;
    };
    results: T[];
}
