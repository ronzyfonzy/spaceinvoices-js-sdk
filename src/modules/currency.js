import BaseModule from './baseModule'

/**
 * @extends {BaseModule}
 */
class Currency extends BaseModule {
  /**
   *
   * @returns {Promise<Object[]>}
   */
  list () {
    return this.call('/currencies')
  }
}

export default new Currency()
