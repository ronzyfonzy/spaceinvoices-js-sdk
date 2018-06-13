import BaseModel from './baseModel'
import { account, organization } from '../modules'

export default class MAccount extends BaseModel {

  /**
   * @param {null|object} data 
   */
  constructor(data = null) {
    super(data)
    this.module = account
  }

  /**
   * @inheritDoc
   */
  setId() {
    this.id = this.data.userId
  }

  /**
   * @param {null|FilterBuilder} filter
   *
   * @returns {Promise<MOrganization[]>}
   */
  listOrganizations(filter = null) {
    return organization.list(this.id, filter)
  }

  /**
   *
   * @param {object} data
   *
   * @returns {Promise<MOrganization>}
   */
  createOrganization(data) {
    return organization.create(this.id, data)
  }
}
