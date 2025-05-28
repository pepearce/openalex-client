import { Ids } from "./Ids";
import { XConcept } from "./XConcept";
import { CountByYear } from "./CountByYear";
import { Institution } from "./Institution";
export declare class Author {
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
    constructor(id: string, orcid: string, display_name: string, works_count: number, cited_by_count: number, last_known_institutions: Array<Institution>, counts_by_year: CountByYear[], x_concepts: XConcept[], ids: Ids, display_name_alternatives: string[], works_api_url: string);
}
