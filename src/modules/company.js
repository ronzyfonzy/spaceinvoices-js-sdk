import BaseModel from "./baseModel";

export default class Company extends BaseModel {
  /** 
   * 
   * @returns {Promise<object[]>}
   */
  static list(organizationId) {
    return this.call(`/companies`);
  }

  /** 
   * 
   * @returns {Promise<object[]>}
   */
  static search(term) {
    return this.call(`/companies/search?term=${term}`);
  }
}