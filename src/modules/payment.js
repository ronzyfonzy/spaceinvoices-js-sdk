import BaseModule from "./baseModule";
import { MPayment } from "../models";

class Payment extends BaseModule {

  constructor() {
    super();
    this.transformModel = MPayment;
  }

  /** 
  * @param {string} organizationId
  * 
  * @returns {Promise<MPayment[]>}
  */
  organizationList(organizationId) {
    return this.call(`/organizations/${organizationId}/payments`);
  }

  /** 
  * @param {string} documentId
  * 
  * @returns {Promise<MPayment[]>}
  */
  documentList(documentId) {
    return this.call(`/documents/${documentId}/payments`);
  }

  /** 
   * @param {string} documentId
   * @param {object} data
   * 
   * @returns {Promise<MPayment>}
   */
  create(documentId, data) {
    return this.call(`/documents/${documentId}/payments`, "POST", data);
  }

  /** 
   * @param {string} paymentId
   * @param {object} data
   * 
   * @returns {Promise<MPayment>}
   */
  update(paymentId, data) {
    return this.call(`/payments/${paymentId}`, "PUT", data);
  }

  /** 
   * @param {string} paymentId
   * 
   * @returns {Promise<MPayment>}
   */
  delete(paymentId) {
    return this.call(`/payments/${paymentId}`, "DELETE");
  }
}

export default new Payment();
