import BaseModel from './baseModel'
import { organization } from '../modules'

export default class MAccount extends BaseModel {
  setId () {
    this.id = this.data.userId
  }

  /**
  *
  * @returns {Promise<MOrganization[]>}
  */
  listOrganizations () {
    return organization.list(this.id)
  }
}
