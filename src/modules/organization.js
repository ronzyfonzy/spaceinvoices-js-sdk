import BaseModule from './baseModule'
import { MOrganization } from '../models'

class Organization extends BaseModule {
  constructor () {
    super()
    this.TransformModel = MOrganization
  }

  /**
   * @param {string} accountId
   *
   * @returns {Promise<MOrganization[]>}
   */
  list (accountId) {
    return this.call(`/accounts/${accountId}/organizations`)
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
    return this.call(`/accounts/${accountId}/organizations`, 'POST', data)
  }

  /**
   * @param {string} organizationId
   * @param {object} data
   *
   * @returns {Promise<MOrganization>}
   */
  update (organizationId, data) {
    return this.call(`/organizations/${organizationId}`, 'PUT', data)
  }

  /**
   * @param {string} organizationId
   *
   * @returns {Promise<MOrganization>}
   */
  delete (organizationId) {
    return this.call(`/organizations/${organizationId}`, 'DELETE')
  }
}

export default new Organization()
