import BaseModule from './baseModule'

/**
 * @extends {BaseModule}
 */
export default class Company extends BaseModule {
  /**
   *
   * @returns {Promise<object[]>}
   */
  list (organizationId) {
    return this.call(`/companies`)
  }

  /**
   *
   * @returns {Promise<object[]>}
   */
  search (term) {
    return this.call(`/companies/search?term=${term}`)
  }
}
