import { Source } from "./Source";

export class Location {
  pdf_url: string;
  landing_page_url: string;
  source: Source;

  constructor(
    pdf_url: string,
    landing_page_url: string,
    source: Source
  ) {
    this.pdf_url = pdf_url;
    this.landing_page_url = landing_page_url;
    this.source = source;
  }
}
