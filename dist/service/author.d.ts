import { HttpClient } from "../core/httpClient";
import { APIResponse, Author } from "../entity";
export interface AuthorService {
    getAuthors(params: Record<string, any>): Promise<APIResponse<Author>>;
}
export declare function createAuthorService(httpClient: HttpClient): AuthorService;
