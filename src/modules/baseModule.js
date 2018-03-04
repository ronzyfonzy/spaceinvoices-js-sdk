import { requestService } from "../requestService";

export default class BaseModule {
  /**
   *
   * @param {string} method
   * @param {string} endpoint
   * @param {object} data
   *
   * @returns {Promise<any>}
   */
  static call(endpoint, method = "GET", data = null) {
    return requestService.call(endpoint, method, data).then();
  }
}