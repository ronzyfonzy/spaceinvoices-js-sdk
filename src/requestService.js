import { RequestError, ResponseError } from "./errors";
import rp from "request-promise";

class RequestService {
  /**
   * Initialize
   * @param {string} host
   * @param {string} apiToken
   * @param {string} accountId
   */
  init(host, apiToken, accountId) {
    this.host = host;
    this.apiToken = apiToken;
    this.accountId = accountId;
    this.requester = rp.defaults({
      baseUrl: this.host,
      headers: {
        Authorization: this.apiToken
      }
    });
  }

  /**
   *
   * @param {string} method
   * @param {string} endpoint
   * @param {object} data
   *
   * @returns {Promise}
   */
  call(endpoint, method = "GET", data = null) {
    let requestProps = {
      method,
      uri: this.createUri(endpoint),
      resolveWithFullResponse: true,
      simple: true,
      json: true,
    };

    if (data) {
      requestProps = Object.assign(requestProps, {
        body: data,
      });
    }

    return this.requester(requestProps).then(response => {
      return response.body;
    }).catch(response => {
      return Promise.reject(new ResponseError(response));
    });
  }

  /**
   * Will be deprecated one the account model will be working
   * 
   * @param {string} endpoint
   * @returns {string}
   */
  createUri(endpoint) {
    if (!endpoint) {
      throw new RequestError("No endpoint specified");
    }
    return endpoint.replace("${accountId}", this.accountId);
  }
}

export const requestService = new RequestService();