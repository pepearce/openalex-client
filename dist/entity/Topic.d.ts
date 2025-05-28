declare class Topic {
    description: string;
    display_name: string;
    domain: {
        id: number;
        display_name: string;
    };
    field: {
        id: number;
        display_name: string;
    };
    id: string;
    ids: {
        openalex: string;
        wikipedia?: string;
    };
    keywords: string[];
    subfield: {
        id: number;
        display_name: string;
    };
    updated_date: string;
    works_count: number;
    constructor(description: string, display_name: string, domain: {
        id: number;
        display_name: string;
    }, field: {
        id: number;
        display_name: string;
    }, id: string, ids: {
        openalex: string;
        wikipedia?: string;
    }, keywords: string[], subfield: {
        id: number;
        display_name: string;
    }, updated_date: string, works_count: number);
}
