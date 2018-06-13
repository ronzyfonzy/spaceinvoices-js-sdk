import { RequestError, ServerError } from '../services/errors'
import FilterBuilder from './filterBuilder' // eslint-disable-line no-unused-vars
import rp from 'request-promise'

class RequestService {
  /**
   * Initialize
   * @param {string} host
   * @param {string} apiToken
   * @param {string} accountId
   */
  init (host, apiToken, accountId) {
    this.host = host
    this.apiToken = apiToken
    this.accountId = accountId
    this.requester = rp.defaults({
      baseUrl: this.host,
      headers: {
        Authorization: this.apiToken
      }
    })
  }

  /**
   *
   * @param {string} endpoint
   * @param {string} method
   * @param {null|object} data
   * @param {null|FilterBuilder} filter
   *
   * @returns {Promise<Object|Object[], RequestError|ServerError>}
   */
  call (endpoint, method = 'GET', data = null, filter = null) {
    if (filter !== null) {
      endpoint = filter.buildUri(endpoint)
    }

    let requestProps = {
      method,
      uri: endpoint,
      resolveWithFullResponse: true,
      simple: true,
      json: true
    }

    if (data) {
      requestProps = Object.assign(requestProps, {
        body: data
      })
    }

    return this.requester(requestProps).then(response => {
      return response.body
    }).catch(response => {
      if (response.statusCode >= 400 && response.statusCode < 500) {
        return Promise.reject(new RequestError(response.statusCode, response.response.body.error))
      } else {
        return Promise.reject(new ServerError(response.statusCode, response.response.body.error))
      }
    })
  }
}

export const requestService = new RequestService()
