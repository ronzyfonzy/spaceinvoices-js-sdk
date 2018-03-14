import BaseModel from './baseModel'
import { organization } from '../modules'

export default class MAccount extends BaseModel {
  setId () {
    this.id = this.data.userId
  }

  /**
  * @inheritDoc
  */
  listOrganizations () {
    return organization.list(this.id)
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
