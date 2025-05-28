import { HttpClient } from "../core/httpClient";
import { Work, APIResponse } from "../entity";

const workBaseEndpoint = "works";

export interface WorkService {
  getWorks(params?: Record<string, any>): Promise<APIResponse<Work>>;
  getWorkById(id: string): Promise<APIResponse<Work>>;
  searchWorksByTitle(title: string): Promise<APIResponse<Work>>;
}

export function createWorkService(client: HttpClient): WorkService {
  return {
    getWorks(params = {}): Promise<APIResponse<Work>> {
      return client.get(workBaseEndpoint, params);
    },
    getWorkById(id: string): Promise<APIResponse<Work>> {
      return client.get(`${workBaseEndpoint}/${encodeURIComponent(id)}`);
    },
    searchWorksByTitle(title: string): Promise<APIResponse<Work>> {
      return client.get(workBaseEndpoint, { search: title });
    },
  };
}
