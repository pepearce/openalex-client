import { Authorship } from "./Authorship";
import { Concept } from "./Concept";
import { Location } from "./Location";
import { OpenAccess } from "./OpenAccess";
import { Venue } from "./Venue";

export class Work {
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

  constructor(
    id: string,
    display_name: string,
    publication_year: number,
    publication_date: string,
    type: string,
    cited_by_count: number,
    authorships: Authorship[],
    host_venue: Venue,
    concepts: Concept[],
    referenced_works: string[],
    related_works: string[],
    abstract_inverted_index: object,
    open_access: OpenAccess,
    best_oa_location: Location,
    locations: Location[],
    primary_location: Location,
    id_std: string,
  ) {
    this.id = id;
    this.display_name = display_name;
    this.publication_year = publication_year;
    this.publication_date = publication_date;
    this.type = type;
    this.cited_by_count = cited_by_count;
    this.authorships = authorships;
    this.host_venue = host_venue;
    this.concepts = concepts;
    this.referenced_works = referenced_works;
    this.related_works = related_works;
    this.abstract_inverted_index = abstract_inverted_index;
    this.open_access = open_access;
    this.best_oa_location = best_oa_location;
    this.locations = locations;
    this.primary_location = primary_location;
    this.id_std = id_std;
  }
}
