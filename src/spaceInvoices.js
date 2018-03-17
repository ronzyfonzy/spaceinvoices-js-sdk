import { requestService, FilterBuilder } from './services'
import * as modules from './modules'

export class SpaceInvoices {
  /**
   *
   * @param {string} apiToken - Token needed for calling the API
   * @param {string} accountId - Account for retreiving data from
   * @param {string} host - Hostname for the API / default https://api.spaceinvoices.com/v1
   */
  constructor (apiToken, accountId, host = 'https://api.spaceinvoices.com/v1') {
    requestService.init(host, apiToken, accountId)
  }

  /**
   *
   * @param {string} accountId
   */
  switchAccountId (accountId) {
    requestService.accountId = accountId
  }

  /** @type {Account} */
  get account () { return modules.account }
  /** @type {Client} */
  get client () { return modules.client }
  /** @type {Company} */
  get company () { return modules.company }
  /** @type {Currency} */
  get currency () { return modules.currency }
  /** @type {Document} */
  get document () { return modules.document }
  /** @type {Item} */
  get item () { return modules.item }
  /** @type {Organization} */
  get organization () { return modules.organization }
}
/**
 * Creates a new filter builder instance
 * @returns {FilterBuilder}
 */
export function siFilter () {
  return new FilterBuilder()
}
