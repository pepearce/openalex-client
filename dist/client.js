import { HttpClient } from "./core/httpClient";
import { createWorkService } from "./service/work";
import { createAuthorService } from "./service/author";
export class OpenAlexClient {
    constructor(baseUrl = "https://api.openalex.org") {
        this.http = new HttpClient(baseUrl);
        this.works = createWorkService(this.http);
        this.authors = createAuthorService(this.http);
    }
}
