import BaseModule from "./baseModule";
import { MOrganization } from "../models";

class Organization extends BaseModule {

  constructor() {
    super();
    this.transformModel = MOrganization;
  }

  /** 
   * 
   * @returns {Promise<MOrganization[]>}
   */
  list() {
    return this.call("/accounts/${accountId}/organizations");
  }

  /** 
  * 
  * @returns {Promise<MOrganization>}
  */
  get(organizationId) {
    return this.call(`/organizations/${organizationId}`);
  }

  /** 
   * @param {object} data
   * 
   * @returns {Promise<MOrganization>}
   */
  create(data) {
    return this.call("/accounts/${accountId}/organizations", "POST", data);
  }

  /** 
   * @param {string} organizationId
   * @param {object} data
   * 
   * @returns {Promise<MOrganization>}
   */
  update(organizationId, data) {
    return this.call(`/organizations/${organizationId}`, "PUT", data);
  }

  /** 
   * @param {string} organizationId
   * 
   * @returns {Promise<MOrganization>}
   */
  delete(organizationId) {
    return this.call(`/organizations/${organizationId}`, "DELETE");
  }
}

export default new Organization();
