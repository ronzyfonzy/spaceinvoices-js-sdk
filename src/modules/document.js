import BaseModule from "./baseModule";
import { MDocument } from "../models";

class Document extends BaseModule {

  constructor() {
    super();
    this.transformModel = MDocument;
  }

  /** 
   * 
   * @returns {Promise<MDocument[]>}
   */
  list(organizationId, transform = true) {
    return this.call(`/organizations/${organizationId}/documents`);
  }

  /** 
  * 
  * @returns {Promise<MDocument>}
  */
  get(documentId) {
    return this.call(`/documents/${documentId}`);
  }

  /** 
   * @param {object} data
   * 
   * @returns {Promise<MDocument>}
   */
  create(organizationId, data) {
    return this.call(`/organizations/${organizationId}/documents`, "POST", data);
  }

  /** 
   * @param {string} documentId
   * @param {object} data
   * 
   * @returns {Promise<MDocument>}
   */
  update(documentId, data) {
    return this.call(`/documents/${documentId}`, "PUT", data);
  }

  /** 
   * @param {string} documentId
   * 
   * @returns {Promise<MDocument>}
   */
  delete(documentId) {
    return this.call(`/documents/${documentId}`, "DELETE");
  }
}

export default new Document();
