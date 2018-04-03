import BaseModule from './baseModule'
import { MDocument } from '../models'

export default class Document extends BaseModule {
  constructor () {
    super()
    this.TransformModel = MDocument
  }

  /**
   *
   * @returns {Promise<MDocument[]>}
   */
  list (organizationId, transform = true) {
    return this.call(`/organizations/${organizationId}/documents`)
  }

  /**
  *
  * @returns {Promise<MDocument>}
  */
  get (documentId) {
    return this.call(`/documents/${documentId}`)
  }

  /**
   * @param {string} organizationId
   * @param {object} data
   *
   * @returns {Promise<MDocument>}
   */
  create (organizationId, data) {
    return this.call(`/organizations/${organizationId}/documents`, data, 'POST')
  }

  /**
   * @param {string} documentId
   * @param {object} data
   *
   * @returns {Promise<MDocument>}
   */
  update (documentId, data) {
    return this.call(`/documents/${documentId}`, data, 'PUT')
  }

  /**
   * @param {string} documentId
   *
   * @returns {Promise<MDocument>}
   */
  delete (documentId) {
    return this.call(`/documents/${documentId}`, null, 'DELETE')
  }

  /**
   * @param {string} documentId
   *
   * @returns {Promise<MPayment>}
   */
  payments (documentId) {
    return this.call(`/documents/${documentId}/payments`)
  }
}
