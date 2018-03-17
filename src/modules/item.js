import BaseModule from './baseModule'
import { MItem } from '../models'

class Item extends BaseModule {
  constructor () {
    super()
    this.TransformModel = MItem
  }

  /**
   *
   * @returns {Promise<MItem[]>}
   */
  list (organizationId) {
    return this.call(`/organizations/${organizationId}/items`)
  }

  /**
   *
   * @returns {Promise<MItem[]>}
   */
  search (organizationId, term) {
    return this.call(`/organizations/${organizationId}/search-items?term=${term}`)
  }

  /**
  *
  * @returns {Promise<MItem>}
  */
  get (itemId) {
    return this.call(`/items/${itemId}`)
  }

  /**
   * @param {string} organizationId
   * @param {object} data
   *
   * @returns {Promise<MItem>}
   */
  create (organizationId, data) {
    return this.call(`/organizations/${organizationId}/items`, data, 'POST')
  }

  /**
   * @param {string} itemId
   * @param {object} data
   *
   * @returns {Promise<MItem>}
   */
  update (itemId, data) {
    return this.call(`/items/${itemId}`, data, 'PUT')
  }

  /**
   * @param {string} itemId
   *
   * @returns {Promise<MItem>}
   */
  delete (itemId) {
    return this.call(`/items/${itemId}`, null, 'DELETE')
  }
}

export default new Item()
