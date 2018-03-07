import BaseModule from './baseModule'

class Currency extends BaseModule {
  /**
   *
   * @returns {Promise<object[]>}
   */
  list () {
    return this.call('/currencies')
  }
}

export default new Currency()
