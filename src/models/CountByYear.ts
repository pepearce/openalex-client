export class CountByYear {
  year: number;
  works_count: number;
  cited_by_count: number;

  constructor(
    year: number,
    works_count: number,
    cited_by_count: number
  ) {
    this.year = year;
    this.works_count = works_count;
    this.cited_by_count = cited_by_count;
  }
}

