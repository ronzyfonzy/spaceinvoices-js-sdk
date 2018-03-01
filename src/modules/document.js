import BaseModel from "./baseModel";

export default class Document extends BaseModel {
  /** 
   * 
   * @returns {Promise<object[]>}
   */
  static list(organizationId) {
    return this.call(`/organizations/${organizationId}/documents`);
  }

  /** 
  * 
  * @returns {Promise<object>}
  */
  static get(documentId) {
    return this.call(`/documents/${documentId}`);
  }

  /** 
   * @param {object} data
   * 
   * @returns {Promise<object>}
   */
  static create(organizationId, data) {
    return this.call(`/organizations/${organizationId}/documents`, "POST", data);
  }

  /** 
   * @param {string} documentId
   * @param {object} data
   * 
   * @returns {Promise<object>}
   */
  static update(documentId, data) {
    return this.call(`/documents/${documentId}`, "PUT", data);
  }

  /** 
   * @param {string} documentId
   * 
   * @returns {Promise<object>}
   */
  static delete(documentId) {
    return this.call(`/documents/${documentId}`, "DELETE");
  }
}