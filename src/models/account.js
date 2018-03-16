import BaseModel from './baseModel'
import { organization } from '../modules'

export default class MAccount extends BaseModel {
  /**
   * @inheritDoc
   */
  setId () {
    this.id = this.data.userId
  }

  /**
  * @inheritDoc
  */
  listOrganizations (filter = null) {
    return organization.list(this.id, filter)
  }

  /**
   *
   * @param {object} data
   *
   * @returns {Promise<MOrganization>}
   */
  createOrganization (data) {
    return organization.create(this.id, data)
  }
}
