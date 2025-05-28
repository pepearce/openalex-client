class Topic {
    description: string;
    display_name: string;
    domain: { id: number; display_name: string };
    field: { id: number; display_name: string };
    id: string;
    ids: { openalex: string; wikipedia?: string };
    keywords: string[];
    subfield: { id: number; display_name: string };
    updated_date: string;
    works_count: number;

    constructor(
        description: string,
        display_name: string,
        domain: { id: number; display_name: string },
        field: { id: number; display_name: string },
        id: string,
        ids: { openalex: string; wikipedia?: string },
        keywords: string[],
        subfield: { id: number; display_name: string },
        updated_date: string,
        works_count: number
    ) {
        this.description = description;
        this.display_name = display_name;
        this.domain = domain;
        this.field = field;
        this.id = id;
        this.ids = ids;
        this.keywords = keywords;
        this.subfield = subfield;
        this.updated_date = updated_date;
        this.works_count = works_count;
    }
}

