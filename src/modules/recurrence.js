import BaseModule from './baseModule'
import { MRecurrence } from '../models'

export default class Recurrence extends BaseModule {
  constructor () {
    super()
    this.TransformModel = MRecurrence
  }

  /**
  * @param {string} organizationId
  *
  * @returns {Promise<MRecurrence[]>}
  */
  listFromOrganization (organizationId) {
    return this.call(`/organizations/${organizationId}/recurrences`)
  }

  /**
  * @param {string} documentId
  *
  * @returns {Promise<MRecurrence[]>}
  */
  listFromDocument (documentId) {
    return this.call(`/documents/${documentId}/recurrences`)
  }

  /**
   * @param {string} documentId
   * @param {object} data
   *
   * @returns {Promise<MRecurrence>}
   */
  create (documentId, data) {
    return this.call(`/documents/${documentId}/recurrences`, data, 'POST')
  }

  /**
   * @param {string} reccurenceId
   *
   * @returns {Promise<MRecurrence>}
   */
  delete (reccurenceId) {
    return this.call(`/recurrences/${reccurenceId}`, null, 'DELETE')
  }
}
