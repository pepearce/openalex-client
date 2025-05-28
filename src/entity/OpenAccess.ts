export class OpenAccess {
  is_oa: boolean;
  oa_status: string;
  oa_url: string;

  constructor(is_oa: boolean, oa_status: string, oa_url: string) {
    this.is_oa = is_oa;
    this.oa_status = oa_status;
    this.oa_url = oa_url;
  }
}
