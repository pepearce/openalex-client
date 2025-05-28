import { Institution } from "./Institution";
import { Author } from "./Author";
export declare class Authorship {
    author: Author;
    institutions: Institution[];
    raw_affiliation_string: string;
    author_position: string;
    constructor(author: Author, institutions: Institution[], raw_affiliation_string: string, author_position: string);
}
