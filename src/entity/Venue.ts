export class Venue {
  id: string;
  display_name: string;
  publisher: string;
  issn_l: string;
  issn: string[];

  constructor(
    id: string,
    display_name: string,
    publisher: string,
    issn_l: string,
    issn: string[],
  ) {
    this.id = id;
    this.display_name = display_name;
    this.publisher = publisher;
    this.issn_l = issn_l;
    this.issn = issn;
  }
}
