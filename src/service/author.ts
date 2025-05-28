import { HttpClient } from "../core/httpClient";
import { APIResponse, Author } from "../entity";

const authorBaseEndpoint = "/authors";

export interface AuthorService {
  getAuthors(params: Record<string, any>): Promise<APIResponse<Author>>;
}

export function createAuthorService(httpClient: HttpClient): AuthorService {
  return {
    async getAuthors(params = {}): Promise<APIResponse<Author>> {
      return httpClient.get(authorBaseEndpoint, params);
    },
  };
}
