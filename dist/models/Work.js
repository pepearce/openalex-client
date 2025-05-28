export class Work {
    constructor(id, display_name, publication_year, publication_date, type, cited_by_count, authorships, host_venue, concepts, referenced_works, related_works, abstract_inverted_index, open_access, best_oa_location, locations, primary_location, id_std) {
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
