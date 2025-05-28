export class Source {
  id: string;
  display_name: string;
  issn_l: string;
  issn: string[];

  constructor(
    id: string,
    display_name: string,
    issn_l: string,
    issn: string[]
  ) {
    this.id = id;
    this.display_name = display_name;
    this.issn_l = issn_l;
    this.issn = issn;
  }
}

