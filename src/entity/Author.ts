import { Ids } from "./Ids";
import { XConcept } from "./XConcept";
import { CountByYear } from "./CountByYear";
import { Institution } from "./Institution";

export class Author {
  id: string;
  orcid: string;
  display_name: string;
  works_count: number;
  cited_by_count: number;
  last_known_institutions: Array<Institution>;
  counts_by_year: CountByYear[];
  x_concepts: XConcept[];
  ids: Ids;
  display_name_alternatives: string[];
  works_api_url: string;

  constructor(
    id: string,
    orcid: string,
    display_name: string,
    works_count: number,
    cited_by_count: number,
    last_known_institutions: Array<Institution>,
    counts_by_year: CountByYear[],
    x_concepts: XConcept[],
    ids: Ids,
    display_name_alternatives: string[],
    works_api_url: string
  ) {
    this.id = id;
    this.orcid = orcid;
    this.display_name = display_name;
    this.works_count = works_count;
    this.cited_by_count = cited_by_count;
    this.last_known_institutions = last_known_institutions;
    this.counts_by_year = counts_by_year;
    this.x_concepts = x_concepts;
    this.ids = ids;
    this.display_name_alternatives = display_name_alternatives;
    this.works_api_url = works_api_url;
  }
}