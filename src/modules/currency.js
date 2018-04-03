import BaseModule from './baseModule'

/**
 * @extends {BaseModule}
 */
export default class Currency extends BaseModule {
  /**
   *
   * @returns {Promise<Object[]>}
   */
  list () {
    return this.call('/currencies')
  }
}
