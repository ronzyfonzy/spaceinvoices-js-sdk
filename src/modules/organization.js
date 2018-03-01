import BaseModel from "./baseModel";

export default class Organization extends BaseModel {
  /** 
   * 
   * @returns {Promise<object[]>}
   */
  static list() {
    return this.call("/accounts/${accountId}/organizations");
  }

  /** 
  * 
  * @returns {Promise<object>}
  */
  static get(organizationId) {
    return this.call(`/organizations/${organizationId}`);
  }

  /** 
   * @param {object} data
   * 
   * @returns {Promise<object>}
   */
  static create(data) {
    return this.call("/accounts/${accountId}/organizations", "POST", data);
  }

  /** 
   * @param {string} organizationId
   * @param {object} data
   * 
   * @returns {Promise<object>}
   */
  static update(organizationId, data) {
    return this.call(`/organizations/${organizationId}`, "PUT", data);
  }

  /** 
   * @param {string} organizationId
   * 
   * @returns {Promise<object>}
   */
  static delete(organizationId) {
    return this.call(`/organizations/${organizationId}`, "DELETE");
  }
}