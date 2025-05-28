import { WorkService } from "./service/work";
import { AuthorService } from "./service/author";
export declare class OpenAlexClient {
    private http;
    works: WorkService;
    authors: AuthorService;
    constructor(baseUrl?: string);
}
