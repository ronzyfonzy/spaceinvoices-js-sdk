import BaseModel from "./baseModel";

export default class Client extends BaseModel {
  /** 
   * 
   * @returns {Promise<object[]>}
   */
  static list(organizationId) {
    return this.call(`/organizations/${organizationId}/clients`);
  }

  /** 
  * 
  * @returns {Promise<object>}
  */
  static get(clientId) {
    return this.call(`/clients/${clientId}`);
  }

  /** 
   * @param {object} data
   * 
   * @returns {Promise<object>}
   */
  static create(organizationId, data) {
    return this.call(`/organizations/${organizationId}/clients`, "POST", data);
  }

  /** 
   * @param {string} clientId
   * @param {object} data
   * 
   * @returns {Promise<object>}
   */
  static update(clientId, data) {
    return this.call(`/clients/${clientId}`, "PUT", data);
  }

  /** 
   * @param {string} clientId
   * 
   * @returns {Promise<object>}
   */
  static delete(clientId) {
    return this.call(`/clients/${clientId}`, "DELETE");
  }
}