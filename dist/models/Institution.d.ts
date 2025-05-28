import { XConcept } from "./XConcept";
import { CountByYear } from "./CountByYear";
export declare class Institution {
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
    constructor(id: string, display_name: string, country_code: string, type: string, homepage_url: string, image_url: string, wikipedia_url: string, ror: string, works_count: number, cited_by_count: number, x_concepts: XConcept[], counts_by_year: CountByYear[], works_api_url: string);
}
