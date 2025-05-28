import { HttpClient } from "./core/httpClient";
import { createWorkService, WorkService } from "./service/work";
import { AuthorService, createAuthorService } from "./service/author";

export class OpenAlexClient {
  private http: HttpClient;

  public works: WorkService;
  public authors: AuthorService;

  constructor(baseUrl = "https://api.openalex.org") {
    this.http = new HttpClient(baseUrl);
    this.works = createWorkService(this.http);
    this.authors = createAuthorService(this.http);
  }
}
