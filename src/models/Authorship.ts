import { Institution } from "./Institution";
import { Author } from "./Author";

export class Authorship {
  author: Author;
  institutions: Institution[];
  raw_affiliation_string: string;
  author_position: string;

  constructor(
    author: Author,
    institutions: Institution[],
    raw_affiliation_string: string,
    author_position: string
  ) {
    this.author = author;
    this.institutions = institutions;
    this.raw_affiliation_string = raw_affiliation_string;
    this.author_position = author_position;
  }
}
