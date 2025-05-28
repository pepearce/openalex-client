import { Authorship } from "./Authorship";
import { Concept } from "./Concept";
import { Location } from "./Location";
import { OpenAccess } from "./OpenAccess";
import { Venue } from "./Venue";
export declare class Work {
    id: string;
    display_name: string;
    publication_year: number;
    publication_date: string;
    type: string;
    cited_by_count: number;
    authorships: Authorship[];
    host_venue: Venue;
    concepts: Concept[];
    referenced_works: string[];
    related_works: string[];
    abstract_inverted_index: object;
    open_access: OpenAccess;
    best_oa_location: Location;
    locations: Location[];
    primary_location: Location;
    id_std: string;
    constructor(id: string, display_name: string, publication_year: number, publication_date: string, type: string, cited_by_count: number, authorships: Authorship[], host_venue: Venue, concepts: Concept[], referenced_works: string[], related_works: string[], abstract_inverted_index: object, open_access: OpenAccess, best_oa_location: Location, locations: Location[], primary_location: Location, id_std: string);
}
