import BaseModel from "./baseModel";

export default class Item extends BaseModel {
  /** 
   * 
   * @returns {Promise<object[]>}
   */
  static list(organizationId) {
    return this.call(`/organizations/${organizationId}/items`);
  }

  /** 
   * 
   * @returns {Promise<object[]>}
   */
  static search(organizationId, term) {
    return this.call(`/organizations/${organizationId}/search-items?term=${term}`);
  }

  /** 
  * 
  * @returns {Promise<object>}
  */
  static get(itemId) {
    return this.call(`/items/${itemId}`);
  }

  /** 
   * @param {object} data
   * 
   * @returns {Promise<object>}
   */
  static create(organizationId, data) {
    return this.call(`/organizations/${organizationId}/items`, "POST", data);
  }

  /** 
   * @param {string} itemId
   * @param {object} data
   * 
   * @returns {Promise<object>}
   */
  static update(itemId, data) {
    return this.call(`/items/${itemId}`, "PUT", data);
  }

  /** 
   * @param {string} itemId
   * 
   * @returns {Promise<object>}
   */
  static delete(itemId) {
    return this.call(`/items/${itemId}`, "DELETE");
  }
}