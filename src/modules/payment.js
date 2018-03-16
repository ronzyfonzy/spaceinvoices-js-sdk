import BaseModule from './baseModule'
import { MPayment } from '../models'

class Payment extends BaseModule {
  constructor () {
    super()
    this.TransformModel = MPayment
  }

  /**
  * @param {string} organizationId
  *
  * @returns {Promise<MPayment[]>}
  */
  organizationList (organizationId) {
    return this.call(`/organizations/${organizationId}/payments`)
  }

  /**
  * @param {string} documentId
  *
  * @returns {Promise<MPayment[]>}
  */
  documentList (documentId) {
    return this.call(`/documents/${documentId}/payments`)
  }

  /**
   * @param {string} documentId
   * @param {object} data
   *
   * @returns {Promise<MPayment>}
   */
  create (documentId, data) {
    return this.call(`/documents/${documentId}/payments`, data, 'POST')
  }

  /**
   * @param {string} paymentId
   * @param {object} data
   *
   * @returns {Promise<MPayment>}
   */
  update (paymentId, data) {
    return this.call(`/payments/${paymentId}`, data, 'PUT')
  }

  /**
   * @param {string} paymentId
   *
   * @returns {Promise<MPayment>}
   */
  delete (paymentId) {
    return this.call(`/payments/${paymentId}`, null, 'DELETE')
  }
}

export default new Payment()
