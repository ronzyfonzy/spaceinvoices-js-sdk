import BaseModule from './baseModule'
import { MClient } from '../models'

/**
 * @extends {BaseModule}
 */
class Client extends BaseModule {
  constructor () {
    super()
    this.TransformModel = MClient
  }

  /**
  *
  * @returns {Promise<MClient[], ResponseError|ServerError>}
  */
  list (organizationId) {
    return this.call(`/organizations/${organizationId}/clients`)
  }

  /**
  * @param {string} organizationId
  * @param {string} term
  *
  * @returns {Promise<MClient[], ResponseError|ServerError>}
  */
  search (organizationId, term) {
    return this.call(`/organizations/${organizationId}/search-clients?term=${term}`)
  }

  /**
  *
  * @returns {Promise<MClient, APIError>}
  */
  get (clientId) {
    return this.call(`/clients/${clientId}`)
  }

  /**
  * @param {string} organizationId
  * @param {object} data
  *
  * @returns {Promise<MClient, APIError>}
  */
  create (organizationId, data) {
    return this.call(`/organizations/${organizationId}/clients`, data, 'POST')
  }

  /**
  * @param {string} clientId
  * @param {object} data
  *
  * @returns {Promise<MClient, APIError>}
  */
  update (clientId, data) {
    return this.call(`/clients/${clientId}`, data, 'PUT')
  }

  /**
  * @param {string} clientId
  *
  * @returns {Promise<MClient, APIError>}
  */
  delete (clientId) {
    return this.call(`/clients/${clientId}`, 'DELETE')
  }
}

export default new Client()
