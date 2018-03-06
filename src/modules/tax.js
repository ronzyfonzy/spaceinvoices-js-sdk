import BaseModule from "./baseModule";
import { MTax } from "../models";

class Tax extends BaseModule {

  constructor() {
    super();
    this.transformModel = MTax;
  }

  /** 
  * @param {string} organizationId
  * 
  * @returns {Promise<MTax[]>}
  */
  list(organizationId) {
    return this.call(`/organizations/${organizationId}/taxes`);
  }

  /** 
   * @param {string} organizationId
   * @param {object} data
   * 
   * @returns {Promise<MTax>}
   */
  create(organizationId, data) {
    return this.call(`/organizations/${organizationId}/taxes`, "POST", data);
  }

  /** 
   * @param {string} taxId
   * @param {object} data
   * 
   * @returns {Promise<object>}
   */
  addRate(taxId, data) {
    return this.call(`/taxes/${taxId}/taxRates`, "POST", data);
  }

  /** 
   * @param {string} taxId
   * @param {object} data
   * 
   * @returns {Promise<MTax>}
   */
  update(taxId, data) {
    return this.call(`/taxes/${taxId}`, "PUT", data);
  }

  /** 
   * @param {string} taxId
   * 
   * @returns {Promise<MTax>}
   */
  delete(taxId) {
    return this.call(`/taxes/${taxId}`, "DELETE");
  }
}

export default new Tax();
