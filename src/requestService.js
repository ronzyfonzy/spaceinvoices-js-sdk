import rp from "request-promise";

class RequestService {
  /**
   * Initialize
   * @param {string} host
   * @param {string} accountId
   * @param {string} apiToken
   */
  init(host, accountId, apiToken) {
    this.host = host;
    this.accountId = accountId;
    this.apiToken = apiToken;
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
      headers: {
        Authorization: this.apiToken
      }
    };

    if (data && this.requestHasBody(method)) {
      requestProps.body = data;
      requestProps.json = true;
    }

    return rp(requestProps).then((data) => {
      return JSON.parse(data);
    });
  }

  requestHasBody(method) {
    return ["GET", "DELETE"].indexOf(method);
  }

  /**
   * @param {string} endpoint
   * @returns {string} 
   */
  createUri(endpoint) {
    let replacedEndpoint = endpoint.replace("${accountId}", this.accountId);
    return `${this.host}${replacedEndpoint}`;
  }
}

export const rs = new RequestService();