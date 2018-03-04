import BaseModule from "./baseModule";

export default class Company extends BaseModule {
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