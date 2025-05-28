export class Institution {
    constructor(id, display_name, country_code, type, homepage_url, image_url, wikipedia_url, ror, works_count, cited_by_count, x_concepts, counts_by_year, works_api_url) {
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
