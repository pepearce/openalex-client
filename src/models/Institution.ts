import { XConcept } from "./XConcept";
import { CountByYear } from "./CountByYear";

export class Institution {
  id: string;
  display_name: string;
  country_code: string;
  type: string;
  homepage_url: string;
  image_url: string;
  wikipedia_url: string;
  ror: string;
  works_count: number;
  cited_by_count: number;
  x_concepts: XConcept[];
  counts_by_year: CountByYear[];
  works_api_url: string;

  constructor(
    id: string,
    display_name: string,
    country_code: string,
    type: string,
    homepage_url: string,
    image_url: string,
    wikipedia_url: string,
    ror: string,
    works_count: number,
    cited_by_count: number,
    x_concepts: XConcept[],
    counts_by_year: CountByYear[],
    works_api_url: string
  ) {
    this.id = id;
    this.display_name = display_name;
    this.country_code = country_code;
    this.type = type;
    this.homepage_url = homepage_url;
    this.image_url = image_url;
    this.wikipedia_url = wikipedia_url;
    this.ror = ror;
    this.works_count = works_count;
    this.cited_by_count = cited_by_count;
    this.x_concepts = x_concepts;
    this.counts_by_year = counts_by_year;
    this.works_api_url = works_api_url;
  }
}

