export class Author {
    constructor(id, orcid, display_name, works_count, cited_by_count, last_known_institutions, counts_by_year, x_concepts, ids, display_name_alternatives, works_api_url) {
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
