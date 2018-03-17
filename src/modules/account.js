import BaseModule from './baseModule'
import { MAccount } from '../models'

/**
 * @extends {BaseModule}
 */
class Account extends BaseModule {
  constructor () {
    super()
    this.TransformModel = MAccount
  }

  /**
  *
  * @param {string} accountId
  *
  * @returns {Promise<object>}
  */
  get (accountId) {
    return this.call(`/accounts/${accountId}`)
  }

  /**
  *
  * @param {string} email
  * @param {string} password
  *
  * @returns {Promise<MAccount>}
  */
  authenticate (email, password) {
    return this.call('/accounts/login', { email, password }, 'POST')
  }

  /**
  *
  * @param {string} email
  * @param {string} password
  *
  * @returns {Promise<object>}
  */
  create (email, password) {
    return this.call('/accounts', { email, password }, 'POST')
  }

  /**
  *
  * @param {string} email

  * @returns {Promise<boolean>}
  */
  isEmailUnique (email) {
    return this.call(`/accounts/is-unique?email=${email}`).then((data) => {
      return data.isUnique
    })
  }
}

export default new Account()
