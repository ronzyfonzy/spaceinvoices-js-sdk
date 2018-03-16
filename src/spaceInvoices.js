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

  get account () { return modules.account }
  get client () { return modules.client }
  get company () { return modules.company }
  get currency () { return modules.currency }
  get document () { return modules.document }
  get item () { return modules.item }
  get organization () { return modules.organization }
}

export function siFilter () {
  return new FilterBuilder()
}
