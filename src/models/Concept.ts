export class Concept {
  id: string;
  wikidata: string;
  display_name: string;
  level: number;
  score: number;

  constructor(
    id: string,
    wikidata: string,
    display_name: string,
    level: number,
    score: number
  ) {
    this.id = id;
    this.wikidata = wikidata;
    this.display_name = display_name;
    this.level = level;
    this.score = score;
  }
}

