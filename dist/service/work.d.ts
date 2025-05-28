import { HttpClient } from "../core/httpClient";
import { Work, APIResponse } from "../entity";
export interface WorkService {
    getWorks(params?: Record<string, any>): Promise<APIResponse<Work>>;
    getWorkById(id: string): Promise<APIResponse<Work>>;
    searchWorksByTitle(title: string): Promise<APIResponse<Work>>;
}
export declare function createWorkService(client: HttpClient): WorkService;
