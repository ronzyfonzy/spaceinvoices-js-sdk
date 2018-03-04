import BaseModule from "./baseModule";

class Company extends BaseModule {
  /** 
   * 
   * @returns {Promise<object[]>}
   */
  list(organizationId) {
    return this.call(`/companies`);
  }

  /** 
   * 
   * @returns {Promise<object[]>}
   */
  search(term) {
    return this.call(`/companies/search?term=${term}`);
  }
}

export default new Company();
