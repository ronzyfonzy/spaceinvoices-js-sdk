import BaseModule from './baseModule'
import { MOrganization } from '../models'
import { FilterBuilder } from '../services' // eslint-disable-line no-unused-vars

class Organization extends BaseModule {
  constructor () {
    super()
    this.TransformModel = MOrganization
  }

  /**
   * @param {string} accountId
   * @param {null|FilterBuilder} filter
   *
   * @returns {Promise<MOrganization[]>}
   */
  list (accountId, filter = null) {
    return this.call(`/accounts/${accountId}/organizations`, filter)
  }

  /**
  *
  * @returns {Promise<MOrganization>}
  */
  get (organizationId) {
    return this.call(`/organizations/${organizationId}`)
  }

  /**
   * @param {string} accountId
   * @param {object} data
   *
   * @returns {Promise<MOrganization>}
   */
  create (accountId, data) {
    return this.call(`/accounts/${accountId}/organizations`, data, 'POST')
  }

  /**
   * @param {string} organizationId
   * @param {object} data
   *
   * @returns {Promise<MOrganization>}
   */
  update (organizationId, data) {
    return this.call(`/organizations/${organizationId}`, data, 'PUT')
  }

  /**
   * @param {string} organizationId
   *
   * @returns {Promise<MOrganization>}
   */
  delete (organizationId) {
    return this.call(`/organizations/${organizationId}`, null, 'DELETE')
  }
}

export default new Organization()
