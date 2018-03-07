import { RequestError, ResponseError } from './errors'
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
   * @param {string} method
   * @param {string} endpoint
   * @param {object} data
   *
   * @returns {Promise}
   */
  call (endpoint, method = 'GET', data = null) {
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
      if (response.statusCode >= 400 && response.statusCode < 50) {
        return Promise.reject(new RequestError(response))
      } else {
        return Promise.reject(new ResponseError(response))
      }
    })
  }
}

export const requestService = new RequestService()
