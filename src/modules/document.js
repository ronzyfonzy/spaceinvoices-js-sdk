import BaseModule from "./baseModule";
import { MDocument } from "../models";

export default class Document extends BaseModule {
  /** 
   * 
   * @returns {Promise<MDocument[]>|object[]}
   */
  static list(organizationId, transform = true) {
    return this.call(`/organizations/${organizationId}/documents`).then((data) => {
      if (transform) {
        return data.map((object) => {
          return new MDocument(object);
        });
      } else {
        return data;
      }
    });
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